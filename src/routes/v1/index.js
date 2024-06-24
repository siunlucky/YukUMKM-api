const express = require("express");

const cmsRoutes = require("./cms/cms.routes");
const publicRoutes = require("./public/public.routes");
const authRoutes = require("./auth/auth.routes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/cms", cmsRoutes);
router.use("/public", publicRoutes)

module.exports = router;