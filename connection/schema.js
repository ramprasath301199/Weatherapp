var mongo = require('mongoose');
const UserSchema = mongo.Schema({
    Name: String,
    Email: String,
    Mobile: Number,
    Password: String,
})
const UserModel = mongo.model("WeatherUsers", UserSchema);
module.exports = { UserModel };