const successResponse = (
    res, 
    data, 
    statusCode = 200, 
    recordsTotal = 0
) => {
    return res.status(statusCode).json({
        code: statusCode,
        status: "OK",
        recordsTotal: recordsTotal,
        data: data,
        error: null
    })
}

const createdResponse = (
    res, 
    message = { message : "Resource created successfully." }, 
    recordsTotal = 1
) => {
    return res.status(201).json({
        code: 201,
        status: "CREATED",
        recordsTotal: recordsTotal,
        data: message,
        error: null
    })
}

module.exports = {
    successResponse,
    createdResponse
}