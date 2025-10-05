"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_route_1 = require("../auth/auth.route");
const blog_route_1 = __importDefault(require("../blog/blog.route"));
const project_route_1 = require("../project/project.route");
const about_route_1 = require("../about/about.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes
    },
    {
        path: "/blog",
        route: blog_route_1.default,
    },
    {
        path: "/projects",
        route: project_route_1.ProjectRoutes,
    },
    {
        path: "/about",
        route: about_route_1.Aboutrouter,
    },
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.route);
});
