const express=require("express")
const Router=express.Router()
const foodcategory=require("../Controller/foodCategoryController")

Router.route("/allcategory").get(foodcategory.getAllfoodCategory)

module.exports=Router