const Joi = require('joi');

const requiredItemCategorySchema = Joi.object({
    name: Joi
        .string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': 'Name must be a string',
            'string.empty': 'Name cannot be an empty field',
            'string.min': 'Name must have at least 3 characters long.',
            'string.max': 'Name must have at most 30 characters long.',
            'any.required': 'Name is required'
        }),
})

const partialItemCategorySchema = Joi.object({
    name: Joi
        .string()
        .min(3)
        .max(30)
        .optional()
        .messages({
            'string.base': 'Name must be a string',
            'string.empty': 'Name cannot be an empty field',
            'string.min': 'Name must have at least 3 characters long.',
            'string.max': 'Name must have at most 30 characters long.',
        }),
})

const requiredRoleSchema = Joi.object({
    name: Joi
        .string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': 'Name must be a string',
            'string.empty': 'Name cannot be an empty field',
            'string.min': 'Name must have at least 3 characters long.',
            'string.max': 'Name must have at most 30 characters long.',
            'any.required': 'Name is required'
        }),
});

const partialRoleSchema = Joi.object({
    name: Joi
        .string()
        .min(3)
        .max(30)
        .optional()
        .messages({
            'string.base': 'Name must be a string',
            'string.empty': 'Name cannot be an empty field',
            'string.min': 'Name must have at least 3 characters long.',
            'string.max': 'Name must have at most 30 characters long.',
        }),
});

const requiredItemSchema = Joi.object({
    name: Joi
        .string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': 'Name must be a string',
            'string.empty': 'Name cannot be an empty field',
            'string.min': 'Name must have at least 3 characters long.',
            'string.max': 'Name must have at most 30 characters long.',
            'any.required': 'Name is required'
        }),
    itemCategory: Joi
        .string()
        .required()
        .guid({
            version: [
                'uuidv4'
            ]
        })
        .messages({
            'number.base': 'Item Category must be a number',
            'number.empty': 'Item Category cannot be an empty field',
            'any.required': 'Item Category is required'
        }),

    price: Joi
        .number()
        .min(0)
        .required()
        .messages({
            'number.base': 'Price must be a number',
            'number.empty': 'Price cannot be an empty field',
            'number.min': 'Price must be greater than 0',
            'any.required': 'Price is required'
        }),
    description: Joi
        .string()
        .min(3)
        .max(255)
        .required()
        .messages({
            'string.base': 'Description must be a string',
            'string.empty': 'Description cannot be an empty field',
            'string.min': 'Description must have at least 3 characters long.',
            'string.max': 'Description must have at most 255 characters long.',
            'any.required': 'Description is required'
        }),
    status: Joi
        .string()
        .valid('true', 'false')
        .required()
        .messages({
            'string.base': 'Status must be a string',
            'string.empty': 'Status cannot be an empty field',
            'any.required': 'Status is required'
        })
});

const partialItemSchema = Joi.object({
    name: Joi
        .string()
        .min(3)
        .max(30)
        .optional()
        .messages({
            'string.base': 'Name must be a string',
            'string.empty': 'Name cannot be an empty field',
            'string.min': 'Name must have at least 3 characters long.',
            'string.max': 'Name must have at most 30 characters long.'
        }),
    itemCategory: Joi
        .string()
        .optional()
        .guid({
            version: [
                'uuidv4'
            ]
        })
        .messages({
            'number.base': 'Item Category must be a number',
            'number.empty': 'Item Category cannot be an empty field',
        }),

    price: Joi
        .number()
        .min(0)
        .optional()
        .messages({
            'number.base': 'Price must be a number',
            'number.empty': 'Price cannot be an empty field',
            'number.min': 'Price must be greater than 0',
        }),
    description: Joi
        .string()
        .min(3)
        .max(255)
        .optional()
        .messages({
            'string.base': 'Description must be a string',
            'string.empty': 'Description cannot be an empty field',
            'string.min': 'Description must have at least 3 characters long.',
            'string.max': 'Description must have at most 255 characters long.',
        }),
    status: Joi
        .string()
        .valid('true', 'false')
        .optional()
        .messages({
            'string.base': 'Status must be a string',
            'string.empty': 'Status cannot be an empty field'
        })
});

const partialProfileSchema = Joi.object({
    name: Joi
        .string()
        .min(3)
        .max(30)
        .optional()
        .messages({
            'string.base': 'Name must be a string',
            'string.empty': 'Name cannot be an empty field',
            'string.min': 'Name must have at least 3 characters long.',
            'string.max': 'Name must have at most 30 characters long.',
            'any.required': 'Name is required'
        }),
    address: Joi
        .string()
        .min(3)
        .max(255)
        .optional()
        .messages({
            'string.base': 'Address must be a string',
            'string.empty': 'Address cannot be an empty field',
            'string.min': 'Address must have at least 3 characters long.',
            'string.max': 'Address must have at most 255 characters long.',
            'any.required': 'Address is required'
        }),
    phoneNumber: Joi
        .string()
        .min(10)
        .max(15)
        .optional()
        .messages({
            'string.base': 'Phone Number must be a string',
            'string.empty': 'Phone Number cannot be an empty field',
            'string.min': 'Phone Number must have at least 10 characters long.',
            'string.max': 'Phone Number must have at most 15 characters long.',
            'any.required': 'Phone Number is required'
        }),
    description: Joi
        .string()
        .min(3)
        .max(255)
        .optional()
        .messages({
            'string.base': 'Description must be a string',
            'string.empty': 'Description cannot be an empty field',
            'string.min': 'Description must have at least 3 characters long.',
            'string.max': 'Description must have at most 255 characters long.',
            'any.required': 'Description is required'
        }),
});


module.exports = {
    requiredItemCategorySchema,
    partialItemCategorySchema,
    requiredRoleSchema,
    partialRoleSchema,
    requiredItemSchema,
    partialItemSchema,
    partialProfileSchema
}