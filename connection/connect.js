var mongo = require('mongoose');
const connect = mongo.connect("mongodb://127.0.0.1:27017/WeatherB")
module.exports = connect;