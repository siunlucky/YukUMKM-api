const prisma = require("../config/db");

const findItemCategories = async (query) => {
    const itemCategories = await prisma.itemCategory.findMany(query);

    return itemCategories;
}

const findItemCategoryById = async (id) => {
    const itemCategory = await prisma.itemCategory.findUnique({
        where: {
            id: id,
        },
    });
    
    return itemCategory;
}

const insertItemCategory = async (newItemCategoryData) => {
    const newItemCategory = await prisma.itemCategory.create({
        data: {
            name: newItemCategoryData.name,
            created_by: newItemCategoryData.created_by,
            updated_by: newItemCategoryData.updated_by,
        },
    });

    return newItemCategory;
}

const updateItemCategory = async (id, newItemCategoryData) => {
    const updatedItemCategory = await prisma.itemCategory.update({
        where: {
            id: id,
        },
        data: {
            name: newItemCategoryData.name,
            updated_by: newItemCategoryData.updated_by,
        },
    });

    return updatedItemCategory;
}

const deleteItemCategory = async (id) => {
    await prisma.itemCategory.delete({
        where: {
            id: id,
        },
    });
}

module.exports = {
    findItemCategories,
    findItemCategoryById,
    insertItemCategory,
    updateItemCategory,
    deleteItemCategory
}