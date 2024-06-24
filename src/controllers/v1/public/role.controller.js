const express = require("express");
const { getAllRoles, getRoleById } = require("../../../services/role.service");
const { successResponse } = require("../../../utils/response");
const { notFoundResponse, internalErrorResponse } = require("../../../utils/errorResponse");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const id = req.query.id;

        if (id) {
            const role = await getRoleById(id);

            if (!role) {
                return notFoundResponse(res, "Role not found");
            }

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
        return internalErrorResponse(res, error);
    }
    
});


module.exports = router;