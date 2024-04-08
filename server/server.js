require("dotenv").config()
const express=require("express")
const cors=require("cors")
const connect=require("./Utilities/db")
const errorMiddleware = require("./Middleware/errorMiddleware")
const port=process.env.PORT
const app=express()
const corsOption={
  origin:'http://localhost:5173',
  methods:"GET,PATCH,PUT,DELETE",
  credentials:true
}
app.use(cors(corsOption))
app.use(express.json())
app.use("/api",require("./Router/foodItemRouter"))
app.use("/api",require("./Router/foodCategoryRouter"))
app.use("/api",require("./Router/userController"))
app.use("/api",require("./Router/orderRouter"))
app.use(errorMiddleware)
connect().then(()=>{
  app.listen(port,()=>{
    console.log(`server connected on port :${port}`)
  })
})



