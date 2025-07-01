
import mongoose from 'mongoose';


export const genderTypes = { male: "male", female: "female" };
export const roleTypes = { admin: "admin", user: "user" };
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 25,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    gender: {
      type: String,
      enum: Object.values(genderTypes),
      default: genderTypes.male,
    },
    role: {
      type: String,
      enum: Object.values(roleTypes),
      default: roleTypes.user,
    },
    phone: String,
    DOB: Date,
    address: String,
    // wishlist: [
    //     { type: mongoose.Schema.Types.ObjectId,
    //          ref: "Product" }],
    // orders: [
    //     { type: mongoose.Schema.Types.ObjectId,
    //          ref: "Order" }],
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model.User || mongoose.model('User', userSchema);

