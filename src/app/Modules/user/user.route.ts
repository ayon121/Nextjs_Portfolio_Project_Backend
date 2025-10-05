import { Router } from "express";
import { UserControllers } from "./user.controller";


import { checkAuth } from "../../Middlewares/CheckAuth";
import { Role } from "./user.interface";




export const Userrouter = Router()





Userrouter.get("/me", checkAuth(...Object.values(Role)), UserControllers.getMe)





