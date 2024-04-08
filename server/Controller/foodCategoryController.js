const foodCategory=require("../Model/foodCat")

const getAllfoodCategory=async(req,res)=>{
  try{
      const data=await foodCategory.find();
    if(!data){
      res.status(404).json({message:"no data found"})
    }
    res.status(200).json(data)
  }catch(error){
    console.log("food category backend fetching error")
  }
}


module.exports={getAllfoodCategory}