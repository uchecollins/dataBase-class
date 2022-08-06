
const mongoose = require("mongoose")


const dbURL = "mongodb+srv://colinsuche:collins@cluster0.ooylsok.mongodb.net/?retryWrites=true&w=majority"

const connectDB = ()=>{
mongoose.connect(dbURL, ()=>{
    console.log("mongodb connected..");
})
}

module.exports = connectDB;