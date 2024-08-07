const express = require("express");

const { loginUser, registerUser, getUserInfoFromToken  } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddlewares");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getRole", authMiddleware, getUserInfoFromToken);

module.exports = router;
