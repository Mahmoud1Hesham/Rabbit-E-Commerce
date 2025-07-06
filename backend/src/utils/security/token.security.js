


import jwt from "jsonwebtoken";
import { userModel } from "../../DB/model/user.model.js";


export const tokenTypes = {
  access: "access",
  refresh: "refresh",
};


// Function to generate a JWT token
export const generateToken = ({
  payload = {},
  signature = process.env.USER_ACCESS_TOKEN,
  expiresIn = "24h",
} = {}) => {
  const token = jwt.sign(payload, signature, { expiresIn });
  return token;
};

// Function to verify a JWT token
export const verifyToken = ({
  token = "",
  signature = process.env.USER_ACCESS_TOKEN,
} = {}) => {
  const decoded = jwt.verify(token, signature);
  return decoded;
};



// Middleware to decode the token and get user information



export const decodeToken = async({authorization="",tokenType=tokenType.access,next}={})=>{

    const [bearer,token] = authorization.split(" ") ||[]
      if ( !bearer || !token) {
        return next(new Error("authorization is required or invalid formate ", { cause: 400 }));
      }
      let accessSignature = "";
      let refreshSignature="";
      switch (bearer) {
        case "system":
          accessSignature = process.env.SYSTEM_ACCESS_TOKEN;
          refreshSignature = process.env.SYSTEM_REFRESH_TOKEN;
          break;
        case "Bearer":
           accessSignature = process.env.USER_ACCESS_TOKEN;
          refreshSignature = process.env.USER_REFRESH_TOKEN;

        default:
          break;
      }
    const decoded = verifyToken({token,signature:tokenType==tokenType.access?accessSignature:refreshSignature})
if(!decoded?.id){
return next(new Error (" in-valid token payload",{cause:401}))
}
 const user = await dbService.findOne({
   model: userModel,
   filter: { _id: decoded.id, isDeleted: false },
 });
if(!user){
   return next(new Error(" in-valid account", { cause: 404 })); 
}
if (userModel.changeCredentialsTime?.getTime() >= decoded.iat*1000){
     return next(new Error(" in-valid Credentials", { cause: 400 })); 
}
return user

}