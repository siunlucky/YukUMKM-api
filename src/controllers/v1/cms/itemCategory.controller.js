const express = require("express");
const { createdResponse, successResponse } = require("../../../utils/response");

const { BadRequestError, NotFoundError, ValidationError } = require("../../../utils/customError");
const { getItemCategoryById, getAllItemCategories, createItemCategory, editItemCategoryById, deleteItemCategoryById } = require("../../../services/itemCategory.service");

const { requiredItemCategorySchema, partialItemCategorySchema } = require("../../../utils/schema");

const router = express.Router();

const multer  = require('multer')
const upload = multer()

router.get("/", async (req, res, next) => {
    try {
        const id = req.query.id;

        if (id) {
            const itemCategory = await getItemCategoryById(id);
            
            return successResponse(res, itemCategory, 200, 1);
        }

        let baseQuery = {
            include: {},
            orderBy: {
                created_at: 'desc',
            },
        };

        const itemCategories = await getAllItemCategories(baseQuery);

        return successResponse(res, itemCategories, 200, itemCategories.length);
    } catch (error) {
        next(error);
    }
});

router.post("/", upload.none(), async (req, res, next) => {
    try {
        const { error, value } = requiredItemCategorySchema.validate(req.body);

        if (error) {
            const validationErrors = error.details.map(detail => ({
                name: detail.context.key,
                message: detail.message
            }));

            return next(new ValidationError(validationErrors));
        }

        let newItemCategoryData = value;

        newItemCategoryData.created_by = req.userId;
        newItemCategoryData.updated_by = req.userId;

        await createItemCategory(newItemCategoryData);

        return createdResponse(res)
    } catch (error) {
        next(error);
    }
});

router.put("/", upload.none(), async (req, res, next) => {
    try {
        const id = req.query.id

        if (!id) {
            throw new BadRequestError("ID is required");
        }

        const { error, value } = requiredItemCategorySchema.validate(req.body);

        if (error) {
            const validationErrors = error.details.map(detail => ({
                name: detail.context.key,
                message: detail.message
            }));

            return next(new ValidationError(validationErrors));
        }

        let newItemCategoryData = value;

        newItemCategoryData.updated_by = req.userId;

        await editItemCategoryById(id, newItemCategoryData);

        return successResponse(res, {message: "Item Category updated successfully."}, 200, 1)
    } catch (error) {
        next(error);
    }
});

router.patch("/",upload.none(), async (req, res, next) => {
    try {
        const id = req.query.id

        if (!id) {
            throw new BadRequestError("ID is required");
        }

        const { error, value } = partialItemCategorySchema.validate(req.body);

        if (error) {
            const validationErrors = error.details.map(detail => ({
                name: detail.context.key,
                message: detail.message
            }));

            return next(new ValidationError(validationErrors));
        }

        let newItemCategoryData = value;

        newItemCategoryData.updated_by = req.userId;

        await editItemCategoryById(id, newItemCategoryData);

        return successResponse(res, {message: "Item Category updated successfully."}, 200, 1)
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

        await deleteItemCategoryById(id);

        return successResponse(res, { message: "Item Category deleted successfully." }, 200, 1)
    } catch (error) {
        next(error);
    }
});

module.exports = router;
