const router = require('express').Router();

const userController = require("./controllers/controller.user")

router.get("/user", userController.getAllUsers)
router.post("/user", userController.addUser)

module.exports = router