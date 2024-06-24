const prisma = require("../config/db");


const findRoles = async (query) => {
  const roles = await prisma.role.findMany(query);

  return roles;
};

const findRoleById = async (id) => {
    const role = await prisma.role.findUnique({
        where: {
            id: id,
        },
    });
    
    return role;
}

const findFirstRoleByName = async (name) => {
    const role = await prisma.role.findFirst({
        where: {
            name: name,
        },
    });

    return role;

}

const insertRole = async (newRoleData) => {
    const newRole = await prisma.role.create({
        data: {
            name: newRoleData.name,
            created_by: newRoleData.created_by,
            updated_by: newRoleData.updated_by,
        },
    });

    return newRole;
}

const updateRole = async (id, newRoleData) => {
    const updatedRole = await prisma.role.update({
        where: {
            id: id,
        },
        data: {
            name: newRoleData.name,
            updated_by: newRoleData.updated_by,
        },
    });

    return updatedRole;
}

const deleteRole = async (id) => {
    await prisma.role.delete({
        where: {
            id: id,
        },
    });
}

module.exports = {
    findRoles,
    findRoleById,
    insertRole,
    updateRole,
    deleteRole,
    findFirstRoleByName
}