const express = require("express");
const { createRole, deleteRoleById, getRoleById, getAllRoles, editRoleById } = require("../../../services/role.service");
const { createdResponse, successResponse } = require("../../../utils/response");

const { BadRequestError, NotFoundError, ValidationError } = require("../../../utils/customError");

const router = express.Router();

const multer  = require('multer');
const { requiredRoleSchema, partialRoleSchema } = require("../../../utils/schema");
const upload = multer()

router.get("/", async (req, res, next) => {
    try {
        const id = req.query.id;

        if (id) {
            const role = await getRoleById(id);
            
            return successResponse(res, role, 200, 1);
        }

        let baseQuery = {
            include: {},
            orderBy: {
                created_at: 'desc',
            },
        };

        const roles = await getAllRoles(baseQuery);

        return successResponse(res, roles, 200, roles.length);
    } catch (error) {
        next(error);
    }
});

router.post("/", upload.none(), async (req, res, next) => {
    try {
        const { error, value } = requiredRoleSchema.validate(req.body);

        if (error) {
            const validationErrors = error.details.map(detail => ({
                name: detail.context.key,
                message: detail.message
            }));

            return next(new ValidationError(validationErrors));
        }

        let newRoleData = value

        newRoleData.created_by = req.userId;
        newRoleData.updated_by = req.userId;

        await createRole(newRoleData);

        return createdResponse(res)
    } catch (error) {
        next(error);
    }
});

router.put("/", upload.none(),async (req, res, next) => {
    try {
        const id = req.query.id

        if (!id) {
            throw new BadRequestError("ID is required");
        }

        const { error, value } = requiredRoleSchema.validate(req.body);

        if (error) {
            const validationErrors = error.details.map(detail => ({
                name: detail.context.key,
                message: detail.message
            }));

            return next(new ValidationError(validationErrors));
        }

        let newRoleData = value

        newRoleData.updated_by = req.userId;

        const updatedRole = await editRoleById(id, newRoleData);

        if (!updatedRole) {
            throw new BadRequestError("ID is required");
        }

        return successResponse(res, updatedRole, 200, 1)
    } catch (error) {
       next(error); 
    }  
    
});

router.patch("/", upload.none(),async (req, res, next) => {
    try {
        const id = req.query.id

        if (!id) {
            throw new BadRequestError("ID is required");
        }

        const { error, value } = partialRoleSchema.validate(req.body);

        if (error) {
            const validationErrors = error.details.map(detail => ({
                name: detail.context.key,
                message: detail.message
            }));

            return next(new ValidationError(validationErrors));
        }

        let newRoleData = value

        newRoleData.updated_by = req.userId;

        const updatedRole = await editRoleById(id, newRoleData);

        if (!updatedRole) {
            throw new NotFoundError("Role not found");
        }

        return successResponse(res, updatedRole, 200, 1)
    } catch (error) {
        next(error);
    }
    
});

router.delete("/", async (req, res, next) => {
    try {
        const id = req.query.id;

        if (!id) {
            throw new BadRequestError("ID is required");
        }

        await deleteRoleById(id);

        return successResponse(res, "Resource deleted successfully", 200, 1);
    } catch (error) {
        next(error);
    }
});

module.exports = router;