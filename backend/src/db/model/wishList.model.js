
import mongoose, { model, Schema } from "mongoose";

const wishListSchema = new Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", 
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

export const wishListModel =
  mongoose.models.WishList || model("WishList", wishListSchema);