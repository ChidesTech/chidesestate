const express = require("express");
const authRoutes = express.Router();
const {loginUser, registerUser} = require("../controllers/authController");



authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);


export default authRoutes;