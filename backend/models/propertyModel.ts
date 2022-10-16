 
var mongoose  = require("mongoose");

const propertySchema = mongoose.Schema({
  title : {
    type : String,
  },
  type : {
    type : String,
  },
  status : {
    type : String,
  },
  location : {
    type: String,
  },
  price : {
    type: Number,
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
  }
}, {timestamps : true});


const Property = mongoose.model("Property", propertySchema)

module.exports = Property;