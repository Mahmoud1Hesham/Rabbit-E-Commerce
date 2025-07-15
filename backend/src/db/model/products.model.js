import mongoose, { model, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      default: 0, 
    store_name: {
      type: String,
    },
    },
    availability: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean, 
      default: false,
    },
    sale: {
      type: Boolean,
      default: false,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User",
    },
    rate: {
      type: Number,
      default: 0,
    },
    comments: {
      type: String,
    },
    images: [
      
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ProductModel =
  mongoose.models.Product || model("Product", ProductSchema);
