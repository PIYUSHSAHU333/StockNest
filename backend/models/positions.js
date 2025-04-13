const {Schema, model} = require("mongoose");
const positionSchema = new Schema({
      product: {
        type: String
      },

      name: {
        type: String
      },
      qty:{
        type: Number
      },
      avg: {
        type: Number
      },
      price: {
        type: Number
      },
      net:{
        type: String
      },
      day: {
        type: String
      },
      isLoss: {
        type: Boolean
      },
})

module.exports = model("Position", positionSchema )
