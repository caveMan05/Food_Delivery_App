const jwt=require("jsonwebtoken")
const User=require("../Model/user")
const verifyToken=async(req,res,next)=>{
  try{
    const token=req.header("Authorization")
    if(!token){
      res.status(404).json({message:"No token found"})
      next()
    }
    const jwtToken=token.replace("Bearer","").trim()
    const isVerified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
    req.user=isVerified.email
    next()

  }catch(error){
    console.log("Token missing")
  }
}

module.exports=verifyToken