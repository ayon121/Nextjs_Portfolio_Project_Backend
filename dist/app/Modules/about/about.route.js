"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aboutrouter = void 0;
const express_1 = require("express");
const about_controller_1 = require("./about.controller");
exports.Aboutrouter = (0, express_1.Router)();
exports.Aboutrouter.get("/", about_controller_1.getAboutMe);
exports.Aboutrouter.patch("/", about_controller_1.upsertAboutMe);
exports.Aboutrouter.delete("/", about_controller_1.deleteAboutMe);
