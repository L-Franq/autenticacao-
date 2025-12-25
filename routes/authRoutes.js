const express = require("express");
const router = express.Router();

const controller = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

router.post("/register", controller.register);
router.post("/login", auth, controller.login);

module.exports = router;
