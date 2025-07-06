import { asyncHandler } from "../../../utils/response/error.response.js"; 

import * as dbServices from "../../../DB/db.services.js"
import { successResponse } from "../../../utils/response/success.response.js";
import { userModel } from "../../../DB/model/user.model.js";


export const getMyProfile =asyncHandler(async(req,res,next)=>{
const user = await dbServices.findOne({
model : userModel,
filter : {_id:req.user.id}
});
return successResponse({res,data :{ user}})

})

// Function to update the user's profile except password
export const updateMyProfile = asyncHandler(async(req,res,next)=>{

    const user = await dbServices.findByIdAndUpdate({
        model : userModel,
        id: req.user._id,
        data : req.body,
        options :{ new: true}
    })
    return successResponse({res,data :{ user}})
})


export const addAddress = asyncHandler(async(req,res,next)=>{

    const user = await dbServices.findOne({
        model : userModel,
        filter: { _id: req.user._id },
    });
    if(!user){
        return next(new Error("user not found", { cause: 404 }));
    }

    const newAddress = {
        title: req.body.title,
        street: req.body.street,
        city: req.body.city,
        country: req.body.Country,

    }
    user.addresses.push(newAddress);
    const updatedUser = await dbServices.findByIdAndUpdate({
        model: userModel,
        id: req.user._id,
        data: { addresses: user.addresses },
        options: { new: true },
    });
    return successResponse({ res, data: { user: updatedUser } });
});

export const getMyAddresses = asyncHandler(async (req, res, next) => {
    const user = await dbServices.findOne({
        model: userModel,
        filter: { _id: req.user._id },
        select: "addresses",
    });
    if (!user) {
        return next(new Error("User not found", { cause: 404 }));
    }
    return successResponse({ res, data: { addresses: user.addresses } });
})


// export const updateAddress = asyncHandler(async (req, res, next) => {

// })


// Function to delete an address by its address ID
export const deletedAddress = asyncHandler(async (req, res, next) => {

    const { addressId } = req.params;
    const updatedUser = await dbServices.findByIdAndUpdate({
      model: userModel,
      id: req.user._id,
      data: {
        $pull: { addresses: { _id: addressId } },
      },
      options: { new: true },
    });
    if (!updatedUser) {
      return next(new Error("Address not found", { cause: 404 }));
    }
    const stillExists = updatedUser.addresses.some(
      (address) => address._id.toString() === addressId
    );

    if (stillExists) {
      return next(new Error("Address not found", { cause: 404 }));
    }

    return successResponse({
      res,
      message: "Address deleted successfully",
      data: { user: updatedUser },
    });

    
})
