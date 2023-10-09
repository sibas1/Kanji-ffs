import { Router } from "express";
import { login, register ,logout,profile} from "../controllers/controllers.auth.js";
import {authValider} from "../middelwares/validerToken.js"
const router = Router()

router.post('/register', register);
router.post('/login',login);
router.post('/logout', logout);
router.get('/profile',authValider,profile)

export default router