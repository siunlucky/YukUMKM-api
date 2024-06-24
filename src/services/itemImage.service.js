const { deleteItemImage, findItemImages, findItemImageById, deleteItemImagesByItemId, insertItemImage } = require("../repository/itemImage.repository");
const path = require('path');
const { NotFoundError } = require("../utils/customError");
const { unlink } = require("fs/promises");

const getItemImageById = async (id) => {
    const itemImage = await findItemImageById(id);

    if (!itemImage) {
        throw new NotFoundError("Item Image not found");
    }

    return itemImage;
}

const getItemImagesByItemId = async (itemId) => {
    const itemImages = await findItemImages({ where: { item_id: itemId } });

    return itemImages;
}

const createItemImage = async (newItemImageData) => {
    const newItemImage = await insertItemImage(newItemImageData);

    return newItemImage;
}

const deleteItemImageById = async (id) => {
    const itemImage = await getItemImageById(id);

    const filePath = path.join(process.cwd(), itemImage.uri);

    try {
        await unlink(filePath);
        console.log('File deleted:', filePath);
    } catch (err) {
        console.log('Error deleting file:', filePath, err);
    }

    await deleteItemImage(id);
}

const deleteItemImageByItemId = async (itemId) => {
    const itemImages = await findItemImages({ where: { item_id: itemId } });

    await Promise.all(itemImages.map(async (itemImage) => {
        try {
            await deleteItemImageById(itemImage.id);
        } catch (err) {
            console.log(`Error deleting item image with ID ${itemImage.id}:`, err);
        }
    }));

    await deleteItemImagesByItemId(itemId);
}

module.exports = {
    getItemImageById,
    deleteItemImageById,
    deleteItemImageByItemId,
    createItemImage,
    getItemImagesByItemId
}
