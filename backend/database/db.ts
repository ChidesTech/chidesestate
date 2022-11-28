import mongoose from "mongoose";

export const connectDB = async () =>{
   try {
    await mongoose.connect("mongodb://localhost/chidesproperties");
   //  await mongoose.connect("mongodb+srv://chidestech:chidesestates@chidesestates.ci7fbbe.mongodb.net/?retryWrites=true&w=majority");
    console.log("MongoDB Connected");
    
   } catch (err) {
    console.log(err.message);
    process.exit(1);   
   }
}