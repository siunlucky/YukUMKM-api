const prisma = require("../config/db");


const findItemImages = async (query) => {
    const itemImages = await prisma.itemImage.findMany(query);

    return itemImages;
}

const findItemImageById = async (id) => {
    const itemImage = await prisma.itemImage.findUnique({
        where: {
            id: id,
        },
    });
    
    return itemImage;
}

const insertItemImage = async (newItemImageData) => {
    const newItemImage = await prisma.itemImage.create({
        data: {
            item_id: newItemImageData.item_id,
            uri: newItemImageData.uri,
            created_by: newItemImageData.created_by,
            updated_by: newItemImageData.updated_by,
        },
    });

    return newItemImage;
}

const updateItemImage = async (id, newItemImageData) => {
    const updatedItemImage = await prisma.itemImage.update({
        where: {
            id: id,
        },
        data: {
            item_id: newItemImageData.item_id,
            uri: newItemImageData.uri,
            updated_by: newItemImageData.updated_by,
        },
    });

    return updatedItemImage;
}

const deleteItemImage = async (id) => {
    await prisma.itemImage.delete({
        where: {
            id: id,
        },
    });
}

const deleteItemImagesByItemId = async (itemId) => {
    await prisma.itemImage.deleteMany({
        where: {
            item_id: itemId,
        },
    });
}



module.exports = {
    findItemImages,
    findItemImageById,
    insertItemImage,
    updateItemImage,
    deleteItemImage,
    deleteItemImagesByItemId
}