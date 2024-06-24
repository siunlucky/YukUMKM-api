const errorHandler = (err, req, res, next) => {
    if (err.isOperational) {
        res.status(err.statusCode).json(err.toPayload());
    } else {
        console.error('INTERNAL_SERVER_ERROR 💥', err);

        res.status(500).json({
            code: 500,
            status: "INTERNAL_SERVER_ERROR",
            recordsTotal: 0,
            data: null,
            error: {
                name: "InternalServerError",
                message: "Something went wrong!",
                validation: null
            }
        });
    }
};

module.exports = errorHandler;