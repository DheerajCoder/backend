import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async() => {

try {

    console.log(process.env.MONGODB_URL)

   const connectionInstance = await   mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

   console.log(`\n MongoDB is Connected on Host ${connectionInstance.connection.host}`)


    
} catch (error) {

    console.log(error, "error Occured Here")

    process.exit(1);
    
}


}

export default connectDB;