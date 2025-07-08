import { Router } from "express";
import {signup , confirmEmail} from "./services/registration.service.js";
import { login } from "./services/login.service.js";
import { validation } from "../../middleware/validation.middleware.js";
import * as validators from "../auth/auth.validation.js"
const router = Router()



router.post("/signup",validation(validators.signup),signup)
router.patch("/confirm-email", validation(validators.confirmEmail),confirmEmail)
router.post("/login",validation(validators.login),login)
export default router;

