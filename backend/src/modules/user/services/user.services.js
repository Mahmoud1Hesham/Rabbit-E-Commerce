import { asyncHandler } from "../../../utils/response/error.response.js"; 

import * as dbServices from "../../../DB/db.services.js"
import { successResponse } from "../../../utils/response/success.response.js";
import { userModel } from "../../../DB/model/user.model.js";
import { orderModel } from "../../../DB/model/order.model.js";
import { compareHash } from "../../../utils/security/hash.security.js";


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




export const getMyOrders = asyncHandler(async (req, res, next) => {
  const orders = await dbServices.findAll({
    model: orderModel,
    filter: { user_id: req.user._id },
    populate: [
      {
        path: "products.product_id",
        select: "title price image",
      },
    ],
  });
  // Check if the user has any orders
  if (!orders || orders.length === 0) {
    return successResponse({
      res,
      message: "You have no orders yet.",
      data: { orders: [] },
    });
  }
  

  return successResponse({
    res,
    message: "Orders fetched successfully",
    data: { orders },
  });
});

export const addToWishlist = asyncHandler(async (req, res, next) => {

  const { productId } = req.body;
  // Check the productId 
  const product = await dbServices.findOne({
    model: productModel,
    filter: { _id: productId },
  });

  if (!product) {
    return next(new Error("Product not found", { cause: 404 }));
  }
  // Check if the user exists
  
  const user = await dbServices.findOne({
    model: userModel,
    filter: { _id: req.user._id },
  });

  if (!user) {
    return next(new Error("User not found", { cause: 404 }));
  }
// Check if the product already exists in the user's wishlist to avoid duplicates
  const alreadyExists = user.wishlist.includes(productId);
  if (alreadyExists) {
    return next(new Error("Product already in wishlist", { cause: 400 }));
  }
  // Add the product to the user's wishlist
  user.wishlist.push(productId);

  const updatedUser = await dbServices.findByIdAndUpdate({
    model: userModel,
    id: user._id,
    data: { wishlist: user.wishlist },
    options: { new: true },
  });
  return successResponse({
    res,
    message: "Product added to wishlist",
    data: { wishlist: updatedUser.wishlist },
  });
});


export const getAllWishlist = asyncHandler(async (req, res, next) => {

const wishlist = await dbServices.findOne({
  model : wishListModel,
  filter: { user_id: req.user._id },
  populate: [
    { path: "products",
      select: "title price image",
    },
  ],
})
if (!wishlist) {
  return next(new Error("Wishlist not found", { cause: 404 }));
}
return successResponse({
  res,
  message: "Wishlist fetched successfully",
  data: { wishlist: wishlist.products },
});

})


export const deleteFromWishlist = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;

  const wishlist = await dbServices.findOne({
    model: wishListModel,
    filter: { user_id: req.user._id },
  });

  if (!wishlist) {
    return next(new Error("Wishlist not found", { cause: 404 }));
  }

  const productIndex = wishlist.products.findIndex(
    (product) => product.toString() === productId
  );

  if (productIndex === -1) {
    return next(new Error("Product not found in wishlist", { cause: 404 }));
  }

  wishlist.products.splice(productIndex, 1);

  const updatedWishlist = await dbServices.findByIdAndUpdate({
    model: wishListModel,
    id: wishlist._id,
    data: { products: wishlist.products },
    options: { new: true },
  });

  return successResponse({
    res,
    message: "Product removed from wishlist",
    data: { wishlist: updatedWishlist.products },
  });
});



export const changePassword = asyncHandler(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  const user = await dbServices.findOne({
    model: userModel,
    filter: { _id: req.user._id },
  });

  if (!user) {
    return next(new Error("User not found", { cause: 404 }));
  }

  const isMatch = compareHash({
    plaintext: oldPassword,
    hashValue: user.password,
  });

  if (!isMatch) {
    return next(new Error("Incorrect old password", { cause: 400 }));
  }

  const hashedPassword = generateHash({ plainText: newPassword });

  const updatedUser = await dbServices.findByIdAndUpdate({
    model: userModel,
    id: req.user._id,
    data: {
      password: hashedPassword,
      changeCredentialsTime: Date.now(), 
    },
  });

  return successResponse({
    res,
    message: "Password changed successfully",
  });
});

//soft delete my account
export const deleteMyAccount = asyncHandler(async (req, res, next) => {
  const user = await dbServices.findByIdAndUpdate({
    model: userModel,
    id: req.user._id,
    data: {
      isDeleted: true,
      deletedAt: Date.now(),
    },
    options: { new: true },
  });

  if (!user) {
    return next(new Error("User not found", { cause: 404 }));
  }

  return successResponse({
    res,
    message: "Account deleted successfully",
  });

})