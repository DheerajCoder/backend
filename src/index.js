import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
  path: "./.env",
});

const app = express();

connectDB();

// ;(async ()=>{
//     try {

//       await   mongoose.connect(`&${process.env.MONGODB_URL}/${DB_NAME}`)
//       app.on("error", (error)=> {

//         console.log("error", error);

//         throw error

//       })

//       app.listen(process.env.PORT,()=> {
//         console.log("my app is listening on port", process.env.PORT)
//       })

//     } catch (error) {

//     }

// })()
