import { Request, Response } from "express";
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");


const registerUser = async (req: Request, res: Response) => {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
     res.status(500).json({ message: "This email has already been used." });
        return;
    }

    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    });

    const user = await newUser.save();


    if (user) {
        res.status(200).json({ success: "User successfully registered"});
    }
}





const loginUser = async (req: Request, res: Response) => {
    
    let existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
        res.status(500).send({ message: "User does not exist" });
        return;
    }
    if (!bcrypt.compareSync(req.body.password, existingUser.password)) {
        res.status(500).send({ message: "Incorrect Password" });
        return;
    }

    let user = {
        _id: existingUser._id,
        email: existingUser.email,
        username: existingUser.username,     
        isAdmin: existingUser.isAdmin,
       
    }
    res.status(200).send({user : user, success : "Login Successful"});

}

module.exports = { registerUser, loginUser }