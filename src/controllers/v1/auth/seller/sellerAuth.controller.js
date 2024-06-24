const express = require("express");
const { register, login } = require("../../../../services/auth.service");
const { getFirstRoleByName } = require("../../../../services/role.service");
const { successResponse } = require("../../../../utils/response");

const router = express.Router();

router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const role = await getFirstRoleByName("seller");

        const token = await login(email, password, role.id)

        const resp = {
            token: token,
        };

        return successResponse(res, resp);

    } catch (error) {
        next(error)
    }
});

router.post("/register", async (req, res, next) => {
    try {
        let newUserData = req.body;

        const role = await getFirstRoleByName("seller");

        newUserData.role_id = role.id;

        const token = await register(newUserData)

        const resp = {
            token: token,
        };

        return successResponse(res, resp);

    } catch (error) {
        next(error)
    }
});

module.exports = router;