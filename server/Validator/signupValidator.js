const z=require("zod")
const zodSignupSchema=z.object({
  name:z
  .string({required_error:"Name is required"})
  .trim()
  .min(3,{message:"Name is too short"})
  .max(30,{message:"Name is too long"}),
  location:z
  .string({required_error:"Location is required"})
  .trim()
  .min(2,{message:"Location is too short"})
  .max(50,{message:"Location is too long"}),
  email:z
  .string({required_error:"email is required"})
  .email()
  .trim(),
  password:z
  .string({required_error:"Password is required"})
  .trim()
  .min(3,{message:"Password is too weak"})
  .max(255,{message:"Password is too long"}),
  
  
})

module.exports=zodSignupSchema