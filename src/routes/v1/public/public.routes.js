const express = require("express");

const router = express.Router();

const roleController = require("../../../controllers/v1/public/role.controller");

router.use("/role", roleController);

module.exports = router;