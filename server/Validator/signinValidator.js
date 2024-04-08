const z=require("zod")
const zodSigninSchema=z.object({
  email:z
  .string({required_error:"email is required"})
  .email()
  .trim(),
  password:z
  .string({required_error:"Password is required"})
  .trim()
  .min(3,{message:"Password is too weak"})
  .max(255,{message:"Password is too long "}),

})

module.exports=zodSigninSchema