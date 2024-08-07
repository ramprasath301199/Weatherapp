const express = require("express");
const ejs = require("ejs")
const app = express();
const router = express.Router();
const { UserSignup, UserLogin } = require("../controllers/userControler")
router.get("/signin", UserLogin);
router.get("/signup", UserSignup);
module.exports = router;