import mongoose from "mongoose";


const propertySchema = new mongoose.Schema({
  title : {
    type : String,
  },
  type : {
    type : String,
  },
  status : {
    type : String,
  },
  address : {
    type: String,
  },
  state : {
   type : String
  },
  city : {
    type : String
  },
  price : {
    type: Number,
  },
  rating : {
    type : Number,
    min : 0,
    max : 5
  },
  period : {
    type: String,
  },
  cover : {
    type: String,
  },
  images : {
    type: Array,
  },
  videos : {
    type: Array,
  },
 description: {
    type: Array,
  },
 bathrooms: {
    type: Number,
  },
 bedrooms: {
    type: Number,
  },
 garages: {
    type: Number,
  },
 features: {
    type: Array,
  },
 details: {
    type: Array,
  },
  featured : {
    type : Boolean,
    default : false
  }
}, {timestamps : true});

type PropertyType = mongoose.InferSchemaType<typeof propertySchema>;
const Property = mongoose.model<PropertyType>("Property", propertySchema);

export default Property;