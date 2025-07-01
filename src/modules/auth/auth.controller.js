import { Router } from "express";
import {signup , confirmEmail} from "./services/registration.service.js";
const router = Router()



router.get("/signup", signup)
router.get("/confirm-email", confirmEmail)
export default router;

