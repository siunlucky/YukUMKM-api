const express = require("express");

const router = express.Router();

const buyerAuthController = require("../../../controllers/v1/auth/buyer/buyerAuth.controller")
const sellerAuthController = require("../../../controllers/v1/auth/seller/sellerAuth.controller")
const profileController = require("../../../controllers/v1/auth/profile.controller");
const { authMiddleware } = require("../../../middlewares/authMiddleware");

router.use("/buyer", buyerAuthController);
router.use("/seller", sellerAuthController);
router.use("/profile", authMiddleware, profileController);

module.exports = router;
