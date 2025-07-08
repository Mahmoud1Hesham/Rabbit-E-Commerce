import { userModel } from "../../../db/model/user.model.js";
import * as dbService from "../../../db/db.services.js"
import { asyncHandler } from "../../../utils/response/error.response.js";
import { successResponse } from "../../../utils/response/success.response.js";
import { compareHash } from "../../../utils/security/hash.security.js";
import { generateToken } from "../../../utils/security/token.security.js";

export const login = asyncHandler(async (req,res,next)=>{
  
    const{email,password} = req.body
    console.log(email,password);
    const user = await dbService.findOne({
          model: userModel,
          filter: { email, isDeleted:{$exists:false} },
        });//object or null
    if(!user) return next(new Error("invalid account",{cause:404}))
        console.log(user.password);
    if(!user.confirmEmail) return next(new Error("please confirm your email first",{cause:400}))
        
    if(!compareHash({plainText:password,hashedValue:user.password}) ) 
        return next(new Error("invalid account credentials ",{cause:404}))
    console.log(user.isDeleted);
    
    if (user.isDeleted) {
        return next(new Error("account freezed please reactivate it",{cause:400}))
    }
    
    const accessToken=generateToken({payload:{id:user._id},signature:user.role == roleTypes.admin?process.env.SYSTEM_ACCESS_TOKEN: process.env.USER_ACCESS_TOKEN})
    const refreshToken=generateToken({payload:{id:user._id},signature:user.role == roleTypes.admin?process.env.SYSTEM_REFRESH_TOKEN: process.env.USER_REFRESH_TOKEN,expiresIn:31536000})
    console.log(accessToken,refreshToken);
    return successResponse({res,message:"Done",status:200,data:{accessToken,refreshToken}})     
   
})