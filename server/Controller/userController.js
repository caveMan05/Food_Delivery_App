const User=require("../Model/user")

//user Registration

const register=async(req,res)=>{
  try{
  const{name,location,email,password}=req.body;
  const emailExist=await User.findOne({email})
    if(emailExist){
      res.status(404).json({message:"email already exist "})
    }
   
  const createUser=await User.create({name,location,email,password})
  res.status(200).json({message:"user created successfully"})
  
  }catch(error){
    console.log("user registration error")
  }
  
}

//login user
const login=async(req,res)=>{
  try{
    const {email,password}=req.body
    const verifyUser=await User.findOne({email})
    if(!verifyUser){
      res.status(404).json({message:"email invalid"})
    }
    const verifyPassword=await verifyUser.comparePassword(password)
    if(!verifyPassword){
      res.status(404).json({message:"password invalid"})
    }
    res.status(200).json({message:"logged in",userId:verifyUser._id.toString(),token:await verifyUser.generateToken()})

  }catch(error){
    console.log("user login Error")
  }
}

module.exports={register,login}