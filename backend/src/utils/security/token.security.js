


import jwt from "jsonwebtoken";
import { userModel } from "../../DB/model/user.model.js";

// Function to generate a JWT token
export const generateToken = ({
    payload = {},
    signature = process.env.TOKEN_SIGNATURE,
    expiresIn = "24h"
}={}) =>{
    const token = jwt.sign(payload, signature ,{expiresIn});
    return token;
};

// Function to verify a JWT token
export const verifyToken = ({
    token = "",
    signature = process.env.TOKEN_SIGNATURE

}={})=>{

    const decoded = jwt.verify(token, signature);
    return decoded;
}



// Middleware to decode the token and get user information
export const decodedToken = async({
    authorization = "",
    next
}={})=>{
    const [bearer, token] = authorization.split(" ") || [];
    if (!bearer || !token) {
      return next(
        new Error("authorization is required or invalid formate ", {
          cause: 400,
        })
      );
    }
    const signature = process.env.TOKEN_SIGNATURE;
    const decoded = verifyToken({ token, signature });
    if (!decoded?.id) {
      return next(new Error(" in-valid token payload", { cause: 401 }));
    }
    const user = await dbService.findOne({
      model: userModel,
      filter: { _id: decoded.id, isDeleted: false },
    });
    if (!user) {
      return next(new Error(" in-valid account", { cause: 404 }));
    }
    if (user.changeCredentialsTime?.getTime() >= decoded.iat * 1000) {
      return next(new Error(" in-valid Credentials", { cause: 400 }));
    }
    return user;

}
