const {positions} = require("./data");
const Positions = require("../models/positions");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env"})
main()
.then((res)=>{
    console.log("Mongoose connected");
    initDB();
    
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(process.env.mongoDB_URL);
}
async function initDB(){
    await Positions.insertMany(positions);
    console.log("data initialised");
}



