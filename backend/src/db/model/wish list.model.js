


import mongoose, { model, Schema } from "mongoose";

const wishListSchema = new  Schema({
    product: [{
        type:mongoose.Schema.type.objectid,
        ref:'product'
    }],
    user_id: {
        type:mongoose.Schema.type.objectid,
        required:true
    },
},{timeStamps:true});
export const wishListModel = mongoose.model.wishList || model("wishList",wishlistSchema)