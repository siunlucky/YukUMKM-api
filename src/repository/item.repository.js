const prisma = require("../config/db");

const findItems = async (query) => {
    const items = await prisma.item.findMany(query);

    return items;
}

const findItemById = async (id) => {
    const item = await prisma.item.findUnique({
        where: {
            id: id,
        },
        include: {
            item_image: true,
        },
    });
    
    return item;
}

const insertItem = async (newItemData) => {
    const newItem = await prisma.item.create({
        data: {
            user_id: newItemData.user_id,
            name: newItemData.name,
            item_category_id: newItemData.item_category_id,
            price: newItemData.price,
            description: newItemData.description,
            is_active: newItemData.is_active,
            created_by: newItemData.created_by,
            updated_by: newItemData.updated_by,
        },
    });

    return newItem;
}

const updateItem = async (id, newItemData) => {
    const updatedItem = await prisma.item.update({
        where: {
            id: id,
        },
        data: {
            user_id: newItemData.user_id,
            name: newItemData.name,
            item_category_id: newItemData.item_category_id,
            price: newItemData.price,
            description: newItemData.description,
            is_active: newItemData.is_active,
            updated_by: newItemData.updated_by,
        },
    });

    return updatedItem;
}

const deleteItem = async (id) => {
    await prisma.item.delete({
        where: {
            id: id,
        },
    });
}



module.exports = {
    findItems,
    findItemById,
    insertItem,
    updateItem,
    deleteItem,
    
}