
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.URL;
const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        mongoose.connect(url);
        console.log("db is suucessfully connected");
    } catch (error) {
        console.log("db is failed");
    }
};
module.exports = connectDb;