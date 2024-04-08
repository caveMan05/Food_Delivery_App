const Orders=require("../Model/orders")
const User=require("../Model/user")

// to post orders 

const userdata=async(req,res)=>{
  const userEmail=req.user
  const orderDetails=req.body
  const orderDate=new Date().toString()
  try{
    const userExist=await Orders.findOne({email:userEmail})
    if(!userExist){
      const newUser=await Orders.create({email:userEmail,orderData:[{details:orderDetails,date:orderDate}]})
      res.status(200).json({message:"order placed"})
    }
    else{
      const existingUser=await Orders.updateOne({email:userEmail},
       {$push:{orderData:{details:orderDetails,date:orderDate}}})
       res.status(200).json({message:"order placed"})
    }

  }catch(error){
    console.log("order place error")
  }
}
  

const allOrders=async(req,res)=>{
  const userEmail=req.user;
  const userOrders=await Orders.findOne({email:userEmail}).select("-_id")
  if(!userOrders){
    res.status(404).json({message:"No orders placed"})
  }
  

  const order = userOrders.orderData


  


  


  
  res.status(200).json(order)
}

module.exports={userdata,allOrders}