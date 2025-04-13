if(process.env.NODE_ENV != "production"){
    require("dotenv").config()
}

const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.mongoDB_URL
const Holdings = require("./models/holdings");

app.use(cors());
app.use(bodyParser.json)

main().then((res =>{
    console.log("Mongoose connect")
}))
.catch((err) =>{
    console.log(err);
})
async function main(){
    await mongoose.connect(DB_URL);
}

app.get("/allHoldings", async(res, res)=>{
    let allHoldings = await Holdings.find({})
    res.json(allHoldings);
})

app.listen(PORT,(req, res)=>{
    console.log("Port listening on 8080")
})