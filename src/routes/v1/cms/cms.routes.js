const express = require("express");

const router = express.Router();

const roleController = require("../../../controllers/v1/cms/role.controller");
const itemController = require("../../../controllers/v1/cms/item.controller");
const itemCategoryController = require("../../../controllers/v1/cms/itemCategory.controller");

const { sellerMiddleware } = require("../../../middlewares/authMiddleware");

router.use("/role", sellerMiddleware, roleController);
router.use("/item", sellerMiddleware, itemController);
router.use("/itemCategory", sellerMiddleware, itemCategoryController);

module.exports = router;
