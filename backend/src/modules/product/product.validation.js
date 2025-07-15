
import Joi from "joi";
import { generalFields } from "../../middleware/validation.middleware.js";

export const getProductByIdValidation = Joi.object().keys({
  productId: generalFields.productId.required(),
});

