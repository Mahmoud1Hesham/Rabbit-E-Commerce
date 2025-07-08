import joi from 'joi'
import { generalFields } from '../../middleware/validation.middleware.js'
export const signup = joi.object().keys({
    username:generalFields.username.required(),
    email:generalFields.email.required(),
    password:generalFields.password.required(),
    confirmPassword:generalFields.confirmPassword.required(),
    phone:generalFields.phone
}).required()

export const login = joi.object().keys({
    email:generalFields.email.required(),
    password:generalFields.password.required(),
}).required()