import * as express from "express";
import * as cors from "cors";
import * as passport from "passport";
import * as passportLocal from "passport-local";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import * as bcrypt from "bcryptjs";
// import * as dotenv from "dotenv";
import { connectDB } from "./database/db";
import authRoutes from "./routes/authRoutes";
import propertyRoutes from "./routes/propertyRoutes";

connectDB();

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


app.listen(process.env.PORT || 5000, ()=> console.log("Listening on port 5000"))
