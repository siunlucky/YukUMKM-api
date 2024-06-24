const express = require("express");
const multer = require("multer");
const path = require('path');
const { successResponse } = require("../../../utils/response");
const { getProfile, editProfile } = require("../../../services/profile.service");
const { ValidationError } = require("../../../utils/customError");
const { partialProfileSchema } = require("../../../utils/schema");
const { unlink } = require("fs/promises");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/profile/');
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
        cb(null, true);
    } else {
        cb(new ValidationError([{
            name: 'profileUri',
            message: 'Only .jpg, .jpeg, .png formats are supported.'
        }]));
    }
};

const limits = {
    fileSize: 2 * 1024 * 1024 // 2MB
};

const upload = multer({
    storage,
    limits,
    fileFilter
});

// Multer error handling middleware
const multerErrorHandling = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return next(new ValidationError([{
                name: 'profileUri',
                message: 'The maximum file size that can be uploaded is 2MB'
            }]));
        }
    }
    next(err);
};

router.get("/" , async (req, res, next) => {
    try {
        const userId = req.userId;

        const user = await getProfile(userId);

        return successResponse(res, user, 200, 1);
    } catch (error) {
        next(error);
    }
});

router.patch("/", upload.single('profileUri'), multerErrorHandling, async (req, res, next) => {
    try {
        const userId = req.userId;

        const user = await getProfile(userId);

        const { error, value } = partialProfileSchema.validate(req.body, { abortEarly: false });

        if (error) {
            const validationErrors = error.details.map(detail => ({
                name: detail.context.key,
                message: detail.message
            }));
            return next(new ValidationError(validationErrors));
        }

        let newProfileData = {
            name: value.name ?? user.name,
            email: value.email ?? user.email,
            address: value.address ?? user.address,
            role_id: value.role_id ?? user.role_id,
            detail_seller: {}
        };

        if (user.role.name === 'seller') {
            newProfileData.detail_seller.phone_number = value.phoneNumber ?? user.detail_seller.phone_number;
            newProfileData.detail_seller.description = value.description ?? user.detail_seller.description;
        }

        if (req.file) {
            if (user.profile_uri) {
                const filePath = path.join(process.cwd(), user.profile_uri);

                try {
                    await unlink(filePath);
                    console.log('File deleted:', filePath);
                } catch (err) {
                    console.log('Error deleting file:', filePath, err);
                }
            }

            const sanitizedFilename = req.file.filename.replace(/\s+/g, '_');
            newProfileData.profile_uri = "public/uploads/profile/" + sanitizedFilename;
        } else {
            newProfileData.profile_uri = user.profile_uri;
        }

        await editProfile(userId, newProfileData);

        const updatedUser = await getProfile(userId);

        return successResponse(res, updatedUser, 200, 1);
    } catch (error) {
        next(error);
    }
});

module.exports = router;