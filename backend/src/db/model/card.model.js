

    


import mongoose, { model, Schema } from "mongoose";





const cardSchema = new  Schema({
    subTotal: {
        type:Number,
        required:true
    },
    Product:[{
        product_id:{
            type:mongoose.schema.type.objectid,
            ref:'product',
            required:true
        },
        quantity: {
            type:Number,
            required:true,
            min:1
        }
    }

    ],
    user_id: {
        type:mongoose.schema.type.objectid,
        ref:"User",
        required:true
    }
},{timeStamps:true});

export const cardModel = mongoose.model.Card || model("Card",cardSchema)