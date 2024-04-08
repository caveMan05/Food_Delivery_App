const express=require("express")
const Router=express.Router()
const foodItemController=require("../Controller/foodItemController")
Router.route("/allitem").get(foodItemController.getallItem)

module.exports=Router