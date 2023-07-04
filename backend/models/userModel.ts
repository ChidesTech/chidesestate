import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email : {
    type : String,
    required : true,
    unique : true,
    // select : false
  },
  username : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true,
    // select : false
  },
  isAdmin : {
    type: Boolean,
    default : false
  }
}, {timestamps : true});

type UserType = mongoose.InferSchemaType<typeof userSchema>;

const User = mongoose.model<UserType>("User", userSchema)

export default User;