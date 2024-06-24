const { findItemCategories, findItemCategoryById, insertItemCategory, updateItemCategory, deleteItemCategory } = require('../repository/itemCategory.repository');
const { NotFoundError } = require('../utils/customError');

const getAllItemCategories = async (query) => {
    const itemCategories = await findItemCategories(query);

    return itemCategories;
}

const getItemCategoryById = async (id) => {
    const itemCategory = await findItemCategoryById(id)

    if (!itemCategory) {
        throw new NotFoundError("Item Category not found");
    }

    return itemCategory;
}

const createItemCategory = async (newItemCategoryData) => {
    const newItemCategory = await insertItemCategory(newItemCategoryData);

    return newItemCategory;
}

const editItemCategoryById = async (id, newItemCategoryData) => {
    await getItemCategoryById(id);
    
    const updatedItemCategory = await updateItemCategory(id, newItemCategoryData);

    return updatedItemCategory;

}

const deleteItemCategoryById = async (id) => {
    await getItemCategoryById(id);

    await deleteItemCategory(id);
}

module.exports = {
    getAllItemCategories,
    getItemCategoryById,
    createItemCategory,
    editItemCategoryById,
    deleteItemCategoryById
}

