
const { findItems, insertItem, findItemById, deleteItem, updateItem } = require("../repository/item.repository");
const { NotFoundError } = require("../utils/customError");
const path = require('path');
const { unlink } = require("fs/promises");

const getAllItems = async (query) => {
    const items = await findItems(query);

    return items;
}

const getItemById = async (id) => {
    const item = await findItemById(id)
    
    if (!item) {
        throw new NotFoundError("Item not found");
    }

    return item;
}

const editItemById = async (id, newItemData) => {
    await getItemById(id);

    const updatedItem = await updateItem(id, newItemData);

    return updatedItem;
}

const createItem = async (newItemData) => {
    const newItem = await insertItem(newItemData); 

    return newItem;
}

const deleteItemById = async (id) => {
    const item = await getItemById(id);

    item.item_image.forEach(async (itemImage) => {
        const filePath = path.join(process.cwd(), itemImage.uri);

        try {
            await unlink(filePath);
            console.log('File deleted:', filePath);
        } catch (err) {
            console.log('Error deleting file:', filePath, err);
        }
    });

    await deleteItem(id);
}


module.exports = {
    getAllItems,
    getItemById,
    createItem,
    deleteItemById,
    editItemById
}