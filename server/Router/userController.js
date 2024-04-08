const express=require("express")
const Router=express.Router()
const userController=require("../Controller/userController")
const validate = require("../Middleware/validateMiddleware")
const zodSignupSchema = require("../Validator/signupValidator")
const zodSigninSchema = require("../Validator/signinValidator")

Router.route("/register").post(validate(zodSignupSchema), userController.register)
Router.route("/login").post(validate(zodSigninSchema), userController.login)

module.exports=Router