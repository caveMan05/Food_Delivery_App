const mongoose = require("mongoose")
const foodItemSchema = mongoose.Schema({

  CategoryName: {
    type: String,
    require: true
  },
  name: {
    type: String
  },

  img: {
    type: String
  },


  options: {
    type: Array
  },
  description: {
    type: String
  }

})

const foodItem=new mongoose.model("food_item",foodItemSchema)

module.exports=foodItem