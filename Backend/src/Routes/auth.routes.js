const express = require("express")
const authRouter = require("../controller/auth.controller")
const router = express.Router()


router.post("/register", authRouter.userRegister)

router.post("/login", authRouter.userLogin)

module.exports = router;
