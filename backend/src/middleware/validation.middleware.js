import Joi from 'joi';
import { Types } from 'mongoose';
import { genderTypes } from '../db/model/user.model.js'; 

const checkObjectId = (value,helper)=>{
  return Types.ObjectId.isValid(value) ? true : helper.message("In-valid objectId ")
}


 const fileObject = {
  fieldname: Joi.string(),
  originalname: Joi.string(),
  encoding: Joi.string(),
  mimetype: Joi.string(),
  destination: Joi.string(),
  filename: Joi.string(),
  path: Joi.string(),
  size: Joi.number(),

}


export const generalFields = {
  username: Joi.string().min(2).max(25).trim(),
  email: Joi.string().email({
    tlds: { allow: ["com", "net"] },
    minDomainSegments: 2,
    maxDomainSegments: 3,
  }),
  code: Joi.string(),
  password: Joi.string().pattern(
    new RegExp(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/)
  ),
  confirmPassword: Joi.string().valid(Joi.ref("password")),
  id: Joi.string().custom(checkObjectId),
  DOB: Joi.date().less("now"),
  phone: Joi.string().pattern(new RegExp(/^(\+20|0020)?1[0-9]{9}$/)),
  gender: Joi.string().valid(...Object.values(genderTypes)),
  productId: Joi.string().hex().length(24),

  file: Joi.object(fileObject),
};






export const validation=(Schema) =>{
return (req,res,next)=>{

const inputData={...req.body,...req.params,...req.query}

if(req.file || req.files?.length){
inputData.file = req.file, req.files
}
    const validationResult = Schema.validate(inputData,{abortEarly:true})
    if(validationResult.error){
        return res.status(400).json({message:"validation error",details:validationResult.error})
    }
    return next()
}
}



export const validationGraph = ({Schema , args={}}={}) => {

 
    const validationResult = Schema.validate(args, { abortEarly: true });
    if (validationResult.error) {
     throw new Error( JSON.stringify ({message:"validation error" , details: validationResult.error.details}))
    }
    return true
  };

  