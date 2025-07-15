import { asyncHandler } from "../../../utils/response/error.response.js";
import * as dbServices from "../../../DB/db.services.js";
import { ProductModel } from "../../../DB/model/products.model.js";



export const getAllProducts = asyncHandler(async (req, res, next) => {
const product = await dbServices.findAll({
    model : ProductModel,
    filter: { isDeleted: false },
    select: "name price stock images category",
sort: { createdAt: -1 },

});
return res.status(200).json({
    status: "success",
    data: { products: product},
  });

})



export const getProductById = asyncHandler(async (req, res, next) => {
    const{productId} = req.params;
    const product = await dbServices.findOne({
        model: ProductModel,
        filter: { _id: productId, isDeleted: false },
    });
    if (!product) {
        return next(new Error("Product not found", { cause: 404 }));
    }
    return res.status(200).json({
        status: "success",
        data: { product },
    });
})