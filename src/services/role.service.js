const { findRoles, findRoleById, insertRole, deleteRole, updateRole, findFirstRoleByName } = require("../repository/role.repository");
const { NotFoundError } = require("../utils/customError");

const getAllRoles = async (query) => {
    const roles = await findRoles(query);

    return roles;
}

const getRoleById = async (id) => {
    const role = await findRoleById(id)
    
    if (!role) {
        throw new NotFoundError("Role not found");
    }

    return role;
}

const getFirstRoleByName = async (name) => {
    const role = await findFirstRoleByName(name);

    if (!role) {
        throw new NotFoundError("Role not found");
    }

    return role;
}

const createRole = async (newRoleData) => {
    const newRole = await insertRole(newRoleData); 

    return newRole;
}

const deleteRoleById = async (id) => {
    await getRoleById(id);

    await deleteRole(id);
}

const editRoleById = async (id, newRoleData) => {
    await getRoleById(id);

    const updatedRole = await updateRole(id, newRoleData);

    return updatedRole;
}

module.exports = {
    getAllRoles,
    createRole,
    getRoleById,
    deleteRoleById,
    editRoleById,
    getFirstRoleByName
}