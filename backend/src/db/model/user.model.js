



import mongoose, { model, Schema } from "mongoose";
export const genderTypes = { male: "male", female: "female" };
export const roleTypes = { admin: "admin", user: "user" };
const userSchema = new Schema(
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
      required: true,
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
    phone: { type: String, required: true, unique: true },
    DOB: Date,
    addresses: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          default: () => new mongoose.Types.ObjectId(),
          
        },
        title: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
      },
    ],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: { type: Date, default: null },
  },

  {
    timestamps: true,
  }
);


 export const userModel = mongoose.model.User || model("User",userSchema)



