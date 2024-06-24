const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("./customError");

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

const jwtSign = async (payload) => {
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    return token;
}

const jwtVerify = async (token) => {
    const decoded = jwt.verify(token, JWT_SECRET);

    return decoded;
}

module.exports = {
    jwtSign,
    jwtVerify,
}