const {Schema, model} = require("mongoose");

const orderSchema = new Schema({
    name:{
        type: String
    }, 
    qty:{
        type: Number
    },
    price:{
        type: Number
    },
    mode:{
        type: String
    }
})

module.exports = model("Order", orderSchema);