
import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    total: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    coupon: {
      type: String,
      default: null,
    },
    shipping_fee: {
      type: Number,
      required: true,
    },
    products: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", 
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const orderModel = mongoose.model.Order || model("Order", orderSchema);
