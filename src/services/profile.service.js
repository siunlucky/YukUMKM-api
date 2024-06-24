const { findUserProfileById, updateUser } = require("../repository/user.repository");
const { NotFoundError } = require("../utils/customError");

const getProfile = async (userId) => {
    const user = await findUserProfileById(userId);

    if (!user) {
        throw new NotFoundError("User not found");
    }

    return user;
}

const editProfile = async (userId, data) => {
    const user = await getProfile(userId);

    if (!user) {
        throw new NotFoundError("User not found");
    }

    return await updateUser(userId, data);
}

module.exports = {
    getProfile,
    editProfile
}