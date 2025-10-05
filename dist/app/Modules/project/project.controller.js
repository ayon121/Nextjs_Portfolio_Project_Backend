"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProjects = exports.getProjectById = exports.updateProject = exports.deleteProject = exports.createProject = void 0;
const project_model_1 = require("./project.model");
const QueryBuilder_1 = require("../../utils/QueryBuilder");
// Create Project
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_model_1.Project.create(req.body);
        res.status(201).json({
            success: true,
            message: "Project created successfully",
            data: project,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create project",
            error,
        });
    }
});
exports.createProject = createProject;
// Delete Project
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedProject = yield project_model_1.Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({
                success: false,
                message: "Project not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Project deleted successfully",
            data: deletedProject,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete project",
            error,
        });
    }
});
exports.deleteProject = deleteProject;
// Update Project
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedProject = yield project_model_1.Project.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedProject) {
            return res.status(404).json({
                success: false,
                message: "Project not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Project updated successfully",
            data: updatedProject,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update project",
            error,
        });
    }
});
exports.updateProject = updateProject;
// Get Project By ID
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const project = yield project_model_1.Project.findById(id);
        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Project fetched successfully",
            data: project,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch project",
            error,
        });
    }
});
exports.getProjectById = getProjectById;
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const builder = new QueryBuilder_1.QueryBuilder(project_model_1.Project.find(), req.query);
        // Apply query features
        builder.filter().search(['title']).sort().fields().paginate();
        const blogs = yield builder.build();
        const meta = yield builder.getMeta();
        res.status(200).json({
            success: true,
            message: 'Projects fetched successfully',
            data: blogs,
            meta
        });
    }
    catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
});
exports.getAllProjects = getAllProjects;
