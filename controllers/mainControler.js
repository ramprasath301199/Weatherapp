const axios = require("axios");
const jwt = require('jsonwebtoken')
const home = (req, res) => {
    var resdata = "";
    var errordata = "";
    res.render("home", { title: "Dashboard Page", header: "Dashboard", resdata, errordata })
}
const about = (req, res) => {
    res.render("about", { title: "About Page", header: "About" })
}
const contact = (req, res) => {
    res.render("contact", { title: "Contact Us Page", header: "Contact" })
}
const login = (req, res) => {
    res.render("login")
}
const signup = (req, res) => {
    res.render("signup")
}
const getCity = async (req, res) => {
    var token = req.query.token;
    jwt.verify(token, "secret", async (err, result) => {
        if (!err) {
            var city = req.query.cityname;
            var Key = "63f4c4c43c0d72d212ce011eed139e6a";
            var APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}`;
            var resdata = "";
            var errordata = "";
            try {
                var response = await axios.get(APIUrl);
                console.log("result", response.data)
                resdata = response.data;
            } catch (error) {
                console.log("error", error.response.data)
                errordata = error.response.data;
            }
            res.render("home", { title: "Dashboard Page", header: "Dashboard", resdata, errordata })
        } else {
            res.send(err.message)
        }
    });

}
module.exports = { home, login, signup, getCity, contact, about }