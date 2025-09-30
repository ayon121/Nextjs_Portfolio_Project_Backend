import { Router } from "express"
import { Userrouter } from "../user/user.route"
import { AuthRoutes } from "../auth/auth.route"
import Blogrouter from "../blog/blog.route"

export const router = Router()
const moduleRoutes = [
    {
        path : "/user",
        route : Userrouter
    },
    {
        path : "/auth",
        route : AuthRoutes
    },
    {
        path : "/blog",
        route : Blogrouter,
    },
]


moduleRoutes.forEach((route) =>{
    router.use(route.path , route.route)
})


