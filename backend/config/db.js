import mongoose from "mongoose";

export const connectDB = async() =>{
  await mongoose.connect('mongodb+srv://rishabhjainforjob:ommahavira20232024@cluster0.qvzbcoa.mongodb.net/MYSHOP').then(()=>console.log("DB Connected"));
}