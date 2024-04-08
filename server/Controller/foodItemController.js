const foodItem=require("../Model/foodItem")
const getallItem=async(req,res)=>{
  try{
    const data=await foodItem.find()
    if(!data){
      res.status(404).json({message:"No food Item found"})
    }
    res.status(200).json(data)
  }catch(error){
    console.log("food item fetching error")
  }
}

module.exports={getallItem}