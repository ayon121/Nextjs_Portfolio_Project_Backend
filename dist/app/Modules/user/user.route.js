"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userrouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const CheckAuth_1 = require("../../Middlewares/CheckAuth");
const user_interface_1 = require("./user.interface");
exports.Userrouter = (0, express_1.Router)();
exports.Userrouter.get("/me", (0, CheckAuth_1.checkAuth)(...Object.values(user_interface_1.Role)), user_controller_1.UserControllers.getMe);
