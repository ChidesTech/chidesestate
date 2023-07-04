import { Request, Response, RequestHandler } from "express";
import createHttpError from "http-errors";
import User from "../models/userModel";

const bcrypt = require("bcryptjs");

interface RegisterBody {
    username?: string,
    email?: string,
    password?: string
}
const registerUser: RequestHandler<unknown, unknown, RegisterBody, unknown> = async (req, res, next) => {
    const { email, username, password } = req.body;
    try {
        if (!username || !email || !password) throw createHttpError(400, "Missing Fields")
        const existingUser = await User.findOne({ email: req.body.email });

        if (existingUser) throw createHttpError(409, "The email has already been used")

        const user = await User.create({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        res.status(201).json({ success: "User successfully registered", user });
    } catch (error) {
     next(error)
    }

}


interface LoginBody {
    email?: string,
    password?: string
}

const loginUser : RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        if(!email || !password) throw createHttpError(400, "Missing Login Credentials")    
        let user = await User.findOne({ email: email }).select("+email +username");
    if (!user) throw createHttpError(401, "Invalid Credentials");
    if (!bcrypt.compareSync(req.body.password, user.password)) throw createHttpError(401, "Invalid Credential")    
    req.session.userId = user._id;
    res.status(201).json(user);
    } catch (error) {
        next(error)
    }   

}


const getAuthenticatedUser : RequestHandler = async(req, res, next) => {
    const authenticatedUserId = req.session.userId;
    
    try {
        if(!authenticatedUserId) throw createHttpError(401, "User not authenticated")
        const user = await User.findById(authenticatedUserId).select("+email").exec();
        res.status(200).json(user)
    } catch (error) {
        next(error);
    }
}

const logoutUser : RequestHandler = async(req, res, next) => {
    req.session.destroy(error => {
        if(error){
            next(error);
        }else{
        res.status(200);
        }
       
    })
} 

module.exports = { registerUser, loginUser, logoutUser , getAuthenticatedUser}