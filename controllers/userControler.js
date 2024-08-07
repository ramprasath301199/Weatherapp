const connect = require("../connection/connect");
const { UserModel } = require("../connection/schema");
const bcrycpt = require("bcrypt");
const jwt = require('jsonwebtoken')
const UserSignup = async (req, res) => {
    var saltRounds = 10;
    var myPlaintextPassword = '';
    try {
        if (req.query) {
            myPlaintextPassword = req.query.password;
            var hash = await bcrycpt.hash(myPlaintextPassword, saltRounds);
            await connect;
            await UserModel.collection.insertOne({ Name: req.query.name, Email: req.query.email, Mobile: req.query.mobile, Password: hash });
            res.redirect("/login");
        }
    } catch (err) {
        console.log("err", err);
        res.send(err)
    }
}
const UserLogin = async (req, res) => {
    try {
        await connect;
        var data = await UserModel.find({ Name: req.query.name });
        const check = await bcrycpt.compare(req.query.password, data[0].Password);
        if (check) {
            var token = jwt.sign({ data: 'foobar' }, 'secret', { expiresIn: '1m' });
            res.send({ token });
        } else
            res.send({ message: "Password Incorrect" });
    } catch (error) {
        console.log(error)
        res.send({ message: "User Not Found" });
    }
}
module.exports = { UserSignup, UserLogin }