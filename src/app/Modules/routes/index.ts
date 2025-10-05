import { Router } from "express"

import { AuthRoutes } from "../auth/auth.route"
import Blogrouter from "../blog/blog.route"
import { ProjectRoutes } from "../project/project.route"
import { Aboutrouter } from "../about/about.route"

export const router = Router()
const moduleRoutes = [
    {
        path : "/auth",
        route : AuthRoutes
    },
    {
        path : "/blog",
        route : Blogrouter,
    },
    {
        path : "/projects",
        route : ProjectRoutes,
    },
    {
        path : "/about",
        route : Aboutrouter,
    },
]


moduleRoutes.forEach((route) =>{
    router.use(route.path , route.route)
})


