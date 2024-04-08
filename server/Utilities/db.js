const mongoose=require("mongoose")
const dbUrl=process.env.URL
const connect=async()=>{
  try{
    await mongoose.connect(dbUrl)
    console.log("Database Connected")
  }catch(error){
    console.log("db connection error")
  }
}

module.exports=connect