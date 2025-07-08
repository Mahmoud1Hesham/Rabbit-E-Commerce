import { userModel } from "../../../db/model/user.model.js";
import { asyncHandler } from "../../../utils/response/error.response.js";
import { successResponse } from "../../../utils/response/success.response.js";
import { generateHash } from "../../../utils/security/hash.security.js";
import * as dbService from "../../../db/db.services.js"





const signup = asyncHandler(async (req, res, next) => {
  const { username, email, password, phone } = req.body;
  console.log(username, email, password, phone);
  const checkUser = await dbService.findOne({
      model: userModel,
      filter: { email, isDeleted:{$exists:false} },
    });
  if (checkUser) return next(new Error("email already exist", { cause: 409 }));
  const hashedPassword = generateHash({ plainText: password });
  const user = await dbService.create({
    model:userModel,
    data:{username,email,password:hashedPassword,phone}
  });
  //emailEvent.emit("sendConfirmEmail", { id: user._id, email });
  return successResponse({ res, status: 201, data: { user } });
});
const confirmEmail =(req,res, next) => {
return res.json({message: "confirmEmail"})
}



export {signup, confirmEmail}