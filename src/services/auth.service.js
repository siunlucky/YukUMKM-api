const { compare, hash } = require("bcrypt");

const { insertUser, findUserByEmailRole } = require("../repository/user.repository");
const { ValidationError, NotFoundError } = require("../utils/customError");

const { jwtSign } = require("../utils/jwtTokenControl");
const { getRoleById } = require("./role.service");
const { insertDetailSeller } = require("../repository/detailSeller.repository");

const register = async (newUserData) => {  
    const user = await findUserByEmailRole(newUserData.email, newUserData.role_id);
    if (user) {
        const key = [{
            name: "email",
            message: "Email already exists"
        }];
        throw new ValidationError(key);
    }

    // Hash the password
    try {
        newUserData.password = await hash(newUserData.password, 10);
    } catch (error) {
        throw new Error("Password hashing failed");
    }

    const newUser = await insertUser(newUserData);

    const role = await getRoleById(newUser.role_id);

    if (role.name === "seller") {
        const newDetailSellerData = {
            user_id: newUser.id,
        };

        await insertDetailSeller(newDetailSellerData);
    }

    const payload = {
        id: newUser.id,
        email: newUser.email,
        role: role.name,
    };

    const token = await jwtSign(payload);

    return token;
};

const login = async (email, password, roleId) => {
    const user = await findUserByEmailRole(email, roleId);

    if (!user) {
        throw new NotFoundError("User not found");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
        throw new NotFoundError("User not found");
    }

    const payload = {
        id: user.id,
        email: user.email,
        role: user.role.name,
      };

    const token = await jwtSign(payload);

    return token;
}

module.exports = {
    register,
    login
}