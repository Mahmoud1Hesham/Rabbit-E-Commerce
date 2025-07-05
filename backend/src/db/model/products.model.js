
import mongoose, { model, Schema } from "mongoose";



const ProductSchema = new Schema({
    category: {
        type:String,
        required:true
    },
    subcategory: {
        type:String
    },
    name: {

        type:String,
        required:true
    },
    description: {
        type:String
    },
    slug: {

        type:String,
        unique:true
    },
    price: {
        type:Number,
        required:true
    },
    stock: {
        type:Number,
        default0
    },
    store_name: {
        type:String
    },
    availability: {
        type:Boolean,
        default:true
    },
    isDeleted:{
        type:Date,
        default:null
    },
    sale: {
        type:Boolean,
        default:false
    },
    user_id: {
        type:mongoose.schema.Types.Objectid,
        ref:"User"
    },
    rate: {
        type:Number,
        default:0
    },
    comments: {
        type:String
    },
    Images: [{
        type:String
    }]},
    // list of two image URLs
    {timestamps:true});


    export const ProductModel = mongoose.model.Product || model("Product",ProductSchema)