const express=require("express")
const Router=express.Router()
const ordersController=require("../Controller/ordersController")
const authMiddleware=require("../Middleware/authMiddleWare")
Router.route("/orders").post(authMiddleware,ordersController.userdata)
Router.route("/allorders").get(authMiddleware,ordersController.allOrders)

module.exports=Router