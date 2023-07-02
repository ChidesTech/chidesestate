import { Request, Response , RequestHandler} from "express";
const User = require("../models/userModel");
const Property = require("../models/propertyModel");

const submitProperty  : RequestHandler= async (req: Request, res: Response) => {
  const property = new Property(req.body);
  await property.save();
  res.status(200).send({success : "Property Submitted Successfully"})
}
const getProperties : RequestHandler = async (req: Request, res: Response) => {
  try {
     const properties = await Property.find();
     res.status(200).json(properties);
  } catch (error) {
    
  }
}
const getProperty : RequestHandler = async (req: Request, res: Response) => {
  try {
     const property = await Property.findById(req.params.id);
     res.status(200).json(property);
     console.log(property)
  } catch (error) {
    
  }
}
const deleteProperty : RequestHandler = async (req: Request, res: Response) => {
  try {
     const deleteProperty = await Property.findByIdAndDelete(req.params.id);
     if(deleteProperty){
     res.status(200).json({success : "Deleted Successfully"});
     }
  } catch (error) {
    res.status(500).send(error);      
    
  }
}


const searchProperties : RequestHandler = async (req: Request, res: Response) => {
  console.log(req.body);
  const {title, location, type, status, bedrooms, bathrooms} = req.body;
   delete req.body.title;
   delete req.body.location;
  if(!type) delete req.body.type;
  
  if(!status) delete req.body.status;
  if(bedrooms === 0) delete req.body.bedrooms;
  if(bathrooms === 0) delete req.body.bathrooms;
  let titleFilter = title ? { title: { $regex: title , $options: 'i' }} : {};
  let locationFilter = location ? { location: { $regex: location , $options: 'i' }} : {};
  try {
     const properties = await Property.find({...req.body, ...titleFilter, ...locationFilter});
     res.status(200).send(properties);  
  } catch (error) {
    res.status(500).send(error);      
  }
}

module.exports = { submitProperty, getProperties, getProperty , deleteProperty, searchProperties};