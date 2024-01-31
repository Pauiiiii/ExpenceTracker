const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.post("/save", userController.saveUser);
router.post("/authenticate", userController.authenticateUser);
module.exports = router;