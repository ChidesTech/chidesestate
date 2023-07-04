import { Request, Response , RequestHandler, NextFunction} from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import Property from "../models/propertyModel";


const submitProperty  : RequestHandler= async (req: Request, res: Response, next : NextFunction) => {
  
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(200).send({success : "Property Submitted Successfully"})
  } catch (error) {
    next(error);
  }
}

const getProperties : RequestHandler = async (req: Request, res: Response, next : NextFunction) => {
  try {
     const properties = await Property.find();
     res.status(200).json(properties);
  } catch (error) {
    next(error)
  }
}
const getProperty : RequestHandler = async (req: Request, res: Response, next : NextFunction) => {
  const {id} = req.params;
  try {
    if(!mongoose.isValidObjectId(id)) throw createHttpError(400, "Invalid Id")
     const property = await Property.findById(req.params.id);
     if(!property) throw createHttpError(404, "Property not found");  
     res.status(200).json(property);
  } catch (error) {
    next(error);
  }
}

const deleteProperty : RequestHandler = async (req: Request, res: Response, next : NextFunction) => {
  try {
     const deleteProperty = await Property.findByIdAndDelete(req.params.id);
     if(deleteProperty){
     res.status(200).json({success : "Deleted Successfully"});
     }
  } catch (error) {
    next(error)        
  }
}

const filterProperties : RequestHandler = async (req: Request, res: Response, next : NextFunction) => {
  const {title, type, status, bedrooms,address, bathrooms} = req.body;
   delete req.body.title;
   delete req.body.location;
  if(!type) delete req.body.type; 
  if(!status) delete req.body.status;
  if(bedrooms === 0) delete req.body.bedrooms;
  if(bathrooms === 0) delete req.body.bathrooms;
  let titleFilter = title ? { title: { $regex: title , $options: 'i' }} : {};
  let addressFilter = address ? { address: { $regex: address , $options: 'i' }} : {};
  try {
     const properties = await Property.find({...req.body, ...titleFilter, 
       ...addressFilter
    });
     res.status(200).send(properties);  
  } catch (error) {
    next(error);      
  }
}
interface SearchPropertiesBody{
  min? : number,
  max? : number,
  limit? : number
}
const searchProperties : RequestHandler = async (req: Request , res : Response, next : NextFunction) => { 
  const { min, max, limit, ...others } = req.body;
  try {
    const properties = await Property.find({
      ...others,
      price: { $gt: min || 1, $lt: max || 999 },
    }).limit(limit || 999);
    res.status(200).json(properties);
  } catch (err) {
    next(err);
  }
};
module.exports = { submitProperty, getProperties, getProperty , deleteProperty, filterProperties, searchProperties};