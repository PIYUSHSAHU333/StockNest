const {holdings} = require("./data");
const Holdings = require("../models/holdings.js");
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
    await Holdings.insertMany(holdings);
    console.log("data initialised");
}



