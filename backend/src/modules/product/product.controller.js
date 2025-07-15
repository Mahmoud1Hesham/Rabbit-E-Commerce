
import { Router } from "express";
import * as productServices from "./services/product.services.js"
import { validation } from "../../middleware/validation.middleware.js";
import * as validators from "./product.validation.js"


const router = Router();




router.get("/", productServices.getAllProducts);
router.get("/:productId", validation(validators.getProductByIdValidation), productServices.getProductById);











export default router;