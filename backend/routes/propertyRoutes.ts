
const express = require("express");
const propertyRoutes = express.Router();
const {submitProperty, getProperties, getProperty, deleteProperty, filterProperties, searchProperties} = require("../controllers/propertyController");



propertyRoutes.post("/", submitProperty);
propertyRoutes.get("/", getProperties);
propertyRoutes.post("/filter", filterProperties);
propertyRoutes.post("/search", searchProperties);
propertyRoutes.get("/:id", getProperty);
propertyRoutes.delete("/:id", deleteProperty);


export default propertyRoutes;