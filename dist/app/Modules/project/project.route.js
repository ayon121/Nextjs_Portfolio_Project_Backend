"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = require("express");
const project_controller_1 = require("./project.controller");
const router = (0, express_1.Router)();
// for admin
router.post("/", project_controller_1.createProject);
// for public
router.get("/", project_controller_1.getAllProjects);
router.get("/:id", project_controller_1.getProjectById);
// for admin
router.put("/:id", project_controller_1.updateProject);
router.delete("/:id", project_controller_1.deleteProject);
exports.ProjectRoutes = router;
