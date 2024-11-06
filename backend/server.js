import express from "express"
import cors from "cors"

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodroute.js";



//app config
const app =express();
const port = 8000 

//middleware
app.use(express.json()) //requests will be passed through this jason file
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
  res.send("Apiiiiiiiiii woooorking")
})

app.listen(port,()=>{
  console.log( `Server started on http://localhost:${port}`);
  
})

