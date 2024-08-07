const express = require("express");
const path = require("path")
const app = express();
const route = require("./routes/home");
var bodyParser = require('body-parser');
var userroute = require("./routes/user")
const PORT = process.env.PORT || 3011;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public')))
app.set("view engine", "ejs");
app.use("/", route);
app.use("/user", userroute);
app.listen(PORT, () => {
    console.log("server started in '" + PORT + "'")
})