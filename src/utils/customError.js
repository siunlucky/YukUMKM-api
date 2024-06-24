class CustomError extends Error {
    constructor(message, statusCode, errorName, statusName, validation = null) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusName;
        this.isOperational = true;
        this.errorName = errorName;
        this.validation = validation;

        Error.captureStackTrace(this, this.constructor);
    }

    toPayload() {
        return {
            code: this.statusCode,
            status: this.status.toUpperCase(),
            recordsTotal: 0,
            data: null,
            error: {
                name: this.errorName,
                message: this.message,
                validation: this.validation
            }
        };
    }
}

class NotFoundError extends CustomError {
    constructor(message = "Resource not found.") {
        super(message, 404, "DoesNotExist","NOT_FOUND");
    }
}

class ValidationError extends CustomError {
    constructor(validation) {
        super("Validation error.", 422, "ValidationError", "VALIDATION_ERROR", validation);
    }
}

class BadRequestError extends CustomError {
    constructor(message = "Bad request.") {
        super(message, 400, "BadRequest", "BAD_REQUEST");
    }
}

class InternalServerError extends CustomError {
    constructor(message = "Internal server error.") {
        super(message, 500, "InternalServerError", "INTERNAL_SERVER_ERROR");
    }
}

class UnauthorizedError extends CustomError {
    constructor(message = "Not authorized.") {
        super(message, 401, "NotAuthorized", "UNAUTHORIZED");
    }
}

class ForbiddenError extends CustomError {
    constructor(message = "Forbidden.") {
        super(message, 403, "Forbidden", "FORBIDDEN");
    }
}

module.exports = {
    NotFoundError,
    ValidationError,
    BadRequestError,
    InternalServerError,
    UnauthorizedError,
    ForbiddenError
};