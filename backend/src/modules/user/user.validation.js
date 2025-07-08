import Joi from "joi";
import { generalFields } from "../../middleware/validation.middleware.js";







export const updateProfileValidation = Joi.object().keys({
    username: generalFields.username.required(),
    DOB: generalFields.DOB.required(),
    phone: generalFields.phone.required()
}).required();

export const addAddressValidation = Joi.object()
  .keys({
    title: Joi.string().min(2).max(50).required(),
    street: Joi.string().min(2).max(50).required(),
    city: Joi.string().min(2).max(50).required(),
    country: Joi.string().min(2).max(50).required(),
  })
  .required();

  export const deleteAddressValidation = Joi.object()
    .keys({
      id: generalFields.id.required(),
    })
    .required();


export const addToWishlistValidation = Joi.object()
  .keys({
    productId: generalFields.productId.required(),
  })
  .required();

export const deleteFromWishlistValidation = Joi.object()
  .keys({
    productId: generalFields.productId.required(),
  })
  .required();

  export const changePasswordValidation = Joi.object()
    .keys({
      oldPassword: generalFields.password.required(),
      newPassword: generalFields.password.required(),
    })
    .required();


