


import mongoose, { model, Schema } from "mongoose";
import { orderModel } from "./order.model.js";

const orderSchema = new  Schema({
    total: {
        type:Number,
        required:true
    },
    subtotal: {
        type:Number,
        required:true
    },
    isDelivered: {
        type:Boolean,
        default:false

    },
    coupon: {
        type:String,
        default:null
    },
    shipping_fee: {
        type:Number,
        required:true
    },
    Product: [{
        Product_id:mongoose.schema.type.objectid,
        quantity:Number
    }],
    user_id: {
        type:mongoose.schema.type.objectid,
        ref:user,
        required:true
    },
},{timestamps: true});


   export const orderModel = mongoose.model.Order || model("Order",orderSchema)

