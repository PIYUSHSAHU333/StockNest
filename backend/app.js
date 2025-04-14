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
const Positions = require("./models/positions");
const Orders = require("./models/orders");
app.use(cors());
app.use(bodyParser.json())

main().then((res =>{
    console.log("Mongoose connect")
}))
.catch((err) =>{
    console.log(err);
})
async function main(){
    await mongoose.connect(DB_URL);
}

app.get("/allHoldings", async(req, res)=>{
    let allHoldings = await Holdings.find({})
    console.log(allHoldings)
    res.json(allHoldings);
})

app.get("/allPositions", async(req, res)=>{
    let allPositions = await Positions.find({});
    res.json(allPositions);
    console.log(allPositions);
})
app.post("/newOrder", async(req, res)=>{
    let newOrder = new Orders({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    });
    res.send("Order saved!");
    newOrder.save();
})
app.listen(PORT,(req, res)=>{
    console.log("Port listening on 8080")
})