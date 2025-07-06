

import { Router } from "express"; 
import { validation } from "../../middleware/validation.middleware.js";
import * as validators from "./user.validation.js"
import * as userServices from "./services/user.services.js"
import { auth } from "../../middleware/auth.middleware.js";
const router = Router();


router.get("/profile" , auth , userServices.getMyProfile)
router.patch("/profile" , auth , validation(validators.updateProfileValidation), userServices.updateMyProfile)
router.post("/profile/address" , auth ,validation(validators.addAddressValidation) , userServices.addAddress)
router.get("/profile/addresses" , auth , userServices.getMyAddresses)
router.delete("/address/:addressId", auth, validation(validators.deleteAddressValidation) , userServices.deletedAddress);








export default router;
