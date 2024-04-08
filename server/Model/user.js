const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userSchema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now()
    
  },
  isAdmin:{
    type:Boolean,
    default:false
  }
})

//for hashing password

userSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    next()
  }
  try{
    const saltRounds=await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash(this.password,saltRounds)
    this.password=hashPassword
  }catch(error){
    console.log("hashing password errror")
  }
})

//for comparing password

userSchema.methods.comparePassword=async function(password){
  return bcrypt.compare(password,this.password)
}

//generate token 

userSchema.methods.generateToken=async function(){
  try{
    return jwt.sign({
      userId:this._id.toString(),
      email:this.email,
      isAdmin:this.isAdmin
    },
      process.env.JWT_SECRET_KEY,
    {
        expiresIn:"5d",
    }
    )

  }catch(error){
    console.log("backend token generation error",error)
  }
}

const User=new mongoose.model("user",userSchema)

module.exports=User


