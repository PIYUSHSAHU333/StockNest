const mongoose = require("mongoose")
const schema = mongoose.Schema


const holdingSchema = new schema ({
    name:{
        type: String
    },
    qty:{
        type: Number
    }, 
    avg:{
        type: Number
    },
    price: {
        type: Number
    }, 
    net:{
        type: String
    },
    day:{
        type: String
    }
})

module.exports = mongoose.model("Holding", holdingSchema)