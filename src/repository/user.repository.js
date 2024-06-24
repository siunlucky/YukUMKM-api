const prisma = require("../config/db");

const findUser = async (query) => {
    const users = await prisma.user.findMany(query);

    return users;
}

const findUserById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });
    
    return user;
}

const findUserProfileById = async (id) => {
    let user = await prisma.user.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            name: true,
            email: true,
            profile_uri: true,
            address: true,
            role_id: true,
            role: true,
        },
    });

    if (user.role.name === 'seller') {
        user = await prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
                email: true,
                profile_uri: true,
                address: true,
                role_id: true,
                role: true,
                detail_seller: true,
            },
        })
    }

    return user;
}

const findUserByEmailRole = async (email, role) => {
    const user = await prisma.user.findFirst({
        where: {
            email: email,
            role_id: role,
        },
        include: {
            role: true,
        }
    });

    return user;
}

const insertUser = async (newUserData) => {
    const newUser = await prisma.user.create({
        data: {
            name: newUserData.name,
            email: newUserData.email,
            password: newUserData.password,
            profile_uri: newUserData.profile_uri,
            role_id: newUserData.role_id,
        },
        
    });

    return newUser;
}

const updateUser = async (id, newUserData) => {
    const updatedUser = await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            name: newUserData.name,
            email: newUserData.email,
            password: newUserData.password,
            profile_uri: newUserData.profile_uri,
            address: newUserData.address,
            role_id: newUserData.role_id,
        },
    });

    if (newUserData.detail_seller) {
        await prisma.detailSeller.update({
            where: {
                user_id: id,
            },
            data: {
                phone_number: newUserData.detail_seller.phone_number,
                description: newUserData.detail_seller.description,
            },
        });
    }

    return updatedUser;
}

const deleteUser = async (id) => {
    await prisma.user.delete({
        where: {
            id: id,
        },
    });
}

module.exports = {
    findUser,
    findUserById,
    insertUser,
    updateUser,
    deleteUser,
    findUserByEmailRole,
    findUserProfileById
}