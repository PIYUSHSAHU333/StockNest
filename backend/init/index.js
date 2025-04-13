const Holding = require("../models/holdings");
const {holdings} = require("./data");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env"})
main().then((res=>{
    console.log("Mongoose connected");
    initDB()
}))
.catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect(process.env.mongoDB_URL);
}

async function initDB(){
    await Holding.deleteMany({})
    const allHoldings = await Holding.insertMany(holdings);
    console.log("Database initailsed")
}

