const express = require("express");
const authRoutes = express.Router();
const {loginUser, registerUser, logoutUser, getAuthenticatedUser} = require("../controllers/authController");



authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/logout", logoutUser);
authRoutes.get("/", getAuthenticatedUser );


export default authRoutes;