
const express = require("express");
const propertyRoutes = express.Router();
const {submitProperty, getProperties, getProperty, deleteProperty, searchProperties} = require("../controllers/propertyController");



propertyRoutes.post("/", submitProperty);
propertyRoutes.get("/", getProperties);
propertyRoutes.post("/search", searchProperties);
propertyRoutes.get("/:id", getProperty);
propertyRoutes.delete("/:id", deleteProperty);


export default propertyRoutes;