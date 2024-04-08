const mongoose=require("mongoose")
const foodCategorySchema=mongoose.Schema({
  
  CategoryName:{
    type:String
  }
})

const foodCategory=new mongoose.model("FoodCategory",foodCategorySchema)

module.exports=foodCategory