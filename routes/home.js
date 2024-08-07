const express = require("express");
const ejs = require("ejs")
const app = express();
const router = express.Router();
const { home, login, signup, about, contact, getCity } = require("../controllers/mainControler")
router.get("/home", home)
router.get("/getcity", getCity)
router.get("/about", about)
router.get("/contact", contact)
router.get("^/$|/login", login)
router.get("/signup", signup)
module.exports = router;