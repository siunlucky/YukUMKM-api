const notFoundResponse = (
    res, 
    message = "Resource not found."
) => {
    return res.status(404).json({
        code: 404,
        status: "NOT_FOUND",
        recordsTotal: 0,
        data: null,
        error: {
            name: "DoesNotExist",
            message: message,
            validation: null
        }
    })
}

const validationErrorResponse = (
    res, 
    validation
) => {
    return res.status(422).json({
        code: 422,
        status: "VALIDATION_ERROR",
        recordsTotal: 0,
        data: null,
        error: {
            name: "ValidationError",
            message: "Validation error.",
            validation: validation
        }
    })
}

const badRequestResponse = (
    res, 
    message = "Bad request."
) => {
    return res.status(400).json({
        code: 400,
        status: "BAD_REQUEST",
        recordsTotal: 0,
        data: null,
        error: {
            name: "BadRequest",
            message: message,
            validation: null
        }
    })
}

const internalErrorResponse = (
    res, 
    error
) => {
    return res.status(500).json({
        code: 500,
        status: "INTERNAL_SERVER_ERROR",
        recordsTotal: 0,
        data: null,
        error: {
            name: "InternalServerError",
            message: error.message,
            validation: null
        }
    })
}

const unauthorizedResponse = (
    res, 
    message = "Not authorized."
) => {
    return res.status(401).json({
        code: 401,
        status: "UNAUTHORIZED",
        recordsTotal: 0,
        data: null,
        error: {
            name: "NotAuthorized",
            message: message,
            validation: null
        }
    })
}

const forbiddenResponse = (
    res, 
    message = "Forbidden."
) => {
    return res.status(403).json({
        code: 403,
        status: "FORBIDDEN",
        recordsTotal: 0,
        data: null,
        error: {
            name: "Forbidden",
            message: message ? message : "Forbidden.",
            validation: null
        }
    })
}

module.exports = {
    notFoundResponse,
    validationErrorResponse,
    badRequestResponse,
    internalErrorResponse,
    internalErrorResponse,
    forbiddenResponse,
    unauthorizedResponse
}