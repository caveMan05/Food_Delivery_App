const mongoose=require("mongoose")

const orderSchema=mongoose.Schema({
  email:{
    type:String,
    require:true,
  },
  orderData:{
    type:Array,
    require:true
  },
  date:{
    type:Date
  }
})

const Orders=new mongoose.model("order",orderSchema)

module.exports=Orders