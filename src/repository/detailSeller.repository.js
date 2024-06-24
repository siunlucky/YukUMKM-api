const prisma = require("../config/db");

const findDetailSellers = async (query) => {
    const detailSellers = await prisma.detailSeller.findMany(query);

    return detailSellers;
}

const findDetailSellerById = async (id) => {
    const detailSeller = await prisma.detailSeller.findUnique({
        where: {
            id: id,
        },
    });
    
    return detailSeller;
}

const insertDetailSeller = async (newDetailSellerData) => {
    const newDetailSeller = await prisma.detailSeller.create({
        data: {
            user_id: newDetailSellerData.user_id,
            phone_number: newDetailSellerData.phone_number,
            description: newDetailSellerData.description,
        },
    });

    return newDetailSeller;
}

const updateDetailSeller = async (id, newDetailSellerData) => {
    const updatedDetailSeller = await prisma.detailSeller.update({
        where: {
            id: id,
        },
        data: {
            user_id: newDetailSellerData.user_id,
            phone_number: newDetailSellerData.phone_number,
            description: newDetailSellerData.description,
        },
    });

    return updatedDetailSeller;
}

const deleteDetailSeller = async (id) => {
    await prisma.detailSeller.delete({
        where: {
            id: id,
        },
    });
}

module.exports = {
    findDetailSellers,
    findDetailSellerById,
    insertDetailSeller,
    updateDetailSeller,
    deleteDetailSeller
}
