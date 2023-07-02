import "dotenv/config";

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import passport from "passport";
import passportLocal from "passport-local";
import cookieParser from "cookie-parser";
import session from "express-session";
import bcrypt from "bcryptjs";

// import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import propertyRoutes from "./routes/propertyRoutes";
import env from "./utils/validateEnv";
import mongoose from "mongoose";
import createHttpError, {isHttpError} from "http-errors";
const port = env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(session({
    secret : "mysecret",
    resave : true,
    saveUninitialized : true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


app.use("/api/properties", propertyRoutes);
app.use("/api/auth", authRoutes);
app.get("/api/getinfo", (req, res)=>{
    console.log("Hit");
    res.send({name :"Desmond"})
});
app.use((req, res, next) => {
    next(createHttpError(404 , "Endpoint not found"));
})




app.use((error : unknown, req  : Request, res : Response, next : NextFunction)=> {
    let errorMessage = 'An Unknown Error Occured';
    let statusCode = 500;
    if(isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }

    res.status(statusCode).json({error : errorMessage});


})



mongoose.connect(env.MONGODB_URL)
.then(() => {
   console.log("MongoDB Connected");
    startServer()
}).catch(
    (error : any)=> console.log(error)
)


const startServer = () => {
  app.listen(port, () => {
        console.log("Listening on port 5000")
    });
}
