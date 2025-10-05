import { Router } from "express";
import { AuthControllers } from "./auth.contoller";
import { checkAuth } from "../../Middlewares/CheckAuth";
import { Role } from "../user/user.interface";
import { UserControllers } from "../user/user.controller";



const router = Router()

router.post("/login", AuthControllers.creadentialLogin)
router.post("/refresh-token", AuthControllers.getNewAccessToken)
router.post("/logout" , AuthControllers.logout)
router.get("/me", checkAuth(...Object.values(Role)), UserControllers.getMe)




export const AuthRoutes = router;