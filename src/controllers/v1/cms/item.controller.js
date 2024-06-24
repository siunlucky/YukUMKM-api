const express = require("express");
const multer = require("multer");
const path = require('path');
const { getItemById, getAllItems, createItem, deleteItemById, editItemById } = require("../../../services/item.service");
const { successResponse, createdResponse } = require("../../../utils/response");
const { ValidationError } = require("../../../utils/customError");
const { getItemCategoryById } = require("../../../services/itemCategory.service");
const { requiredItemSchema } = require("../../../utils/schema");
const { deleteItemImageById, createItemImage, deleteItemImageByItemId } = require("../../../services/itemImage.service");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/item/');
    },
    filename: (req, file, cb) => {
        const sanitizedFilename = file.originalname.replace(/\s+/g, '_');

        cb(null, Date.now() + '-' + sanitizedFilename);
    }
});

const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new ValidationError([{
            name: 'imagesUri',
            message: 'Only .jpg, .jpeg, .png and .webp formats are supported.'
        }]));
    }
};

const limits = {
    fileSize: 2 * 1024 * 1024 // 2MB
};

const upload = multer({
    storage,
    limits, // 2MB
    fileFilter
}).array('imagesUri[]');

const multerErrorHandling = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return next(new ValidationError([{
                name: 'imagesUri',
                message: 'The maximum file size that can be uploaded is 2MB'
            }]));
        }
    }
    next(err);
};

const checkMinFiles = (req, res, next) => {
    if (!req.files || req.files.length < 1) {
        return next(new ValidationError([{
            name: 'imagesUri',
            message: 'At least one image is required.'
        }]));
    }
    next();
};

router.get("/", async (req, res, next) => {
    try {
        const id = req.query.id;

        if (id) {
            const item = await getItemById(id);
            return successResponse(res, item, 200, 1);
        }

        let baseQuery = {
            include: {
                item_image: true,
            },
            orderBy: {
                created_at: 'desc',
            },
        };

        const items = await getAllItems(baseQuery);
        return successResponse(res, items, 200, items.length);
    } catch (error) {
        next(error);
    }
});

router.post("/", upload, multerErrorHandling, checkMinFiles, async (req, res, next) => {
    try {
        const { error, value } = requiredItemSchema.validate(req.body, { abortEarly: false });

        if (error) {
            const validationErrors = error.details.map(detail => ({
                name: detail.context.key,
                message: detail.message
            }));

            return next(new ValidationError(validationErrors));
        }

        newItemData = {
            user_id: req.userId,
            name: value.name,
            item_category_id: value.itemCategory,
            price: Number(value.price),
            description: value.description,
            is_active: value.status.toLowerCase() === "true" ? true : false,
            created_by: req.userId,
            updated_by: req.userId,
        };

        try {
            await getItemCategoryById(newItemData.item_category_id);
        } catch (error) {
            const key = {
                name: "item_category_id",
                message: "Item category not found"
            }
            throw new ValidationError([key]);
        }

        const item = await createItem(newItemData);

        if (req.files) {
            for (const file of req.files) {
                const sanitizedFilename = file.filename.replace(/\s+/g, '_');
                
                const newItemImageData = {
                    item_id: item.id,
                    uri: "public/uploads/item/" + sanitizedFilename,
                    created_by: req.userId,
                    updated_by: req.userId,
                };
                await createItemImage(newItemImageData);
            };
        }

        return createdResponse(res);
    } catch (error) {
        next(error);
    }
});

router.put("/", upload, multerErrorHandling, checkMinFiles, async (req, res, next) => {
    try {
        const id = req.query.id;

        if (!id) {
            throw new BadRequestError("ID is required");
        }

        const { error, value } = requiredItemSchema.validate(req.body, { abortEarly: false });

        if (error) {
            const validationErrors = error.details.map(detail => ({
                name: detail.context.key,
                message: detail.message
            }));
            return next(new ValidationError(validationErrors));
        }

        newItemData = {
            user_id: req.userId,
            name: value.name,
            item_category_id: value.itemCategory,
            price: Number(value.price),
            description: value.description,
            is_active: value.status.toLowerCase() === "true" ? true : false,
            updated_by: req.userId,
        };

        try {
            await getItemCategoryById(newItemData.item_category_id);
        } catch (error) {
            const key = {
                name: "itemCategory",
                message: "Item category not found"
            }
            throw new ValidationError([key]);
        }

        await editItemById(id, newItemData);

        if (req.files) {
            await deleteItemImageByItemId(id);

            for (const file of req.files) {
                const sanitizedFilename = file.filename.replace(/\s+/g, '_');

                const newItemImageData = {
                    item_id: id,
                    uri: "public/uploads/item/" + sanitizedFilename,
                    created_by: req.userId,
                    updated_by: req.userId,
                };

                await createItemImage(newItemImageData);
            }
        }

        return successResponse(res, { message: "Item updated successfully." }, 200, 1);


    } catch (error) {
        next(error)
    }
});

router.delete("/", async (req, res, next) => {
    try {
        const id = req.query.id;

        if (!id) {
            throw new BadRequestError("ID is required");
        }

        const itemImageId = req.query.itemImageId;
        
        if (itemImageId) {
            await deleteItemImageById(itemImageId);

            return successResponse(res, { message: "Item image deleted successfully." }, 200, 1);
        }

        await deleteItemById(id);

        return successResponse(res, { message: "Item deleted successfully." }, 200, 1);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
