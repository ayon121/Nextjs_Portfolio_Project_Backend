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
exports.deleteAboutMe = exports.upsertAboutMe = exports.getAboutMe = void 0;
const about_model_1 = require("./about.model");
// GET About Me
const getAboutMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const about = yield about_model_1.AboutMe.findOne();
        if (!about) {
            return res.status(404).json({
                success: false,
                message: "No About Me info found",
            });
        }
        res.status(200).json({
            success: true,
            data: about,
        });
    }
    catch (error) {
        console.error("Error fetching AboutMe:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
});
exports.getAboutMe = getAboutMe;
// PATCH /about
const upsertAboutMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateData = req.body;
        // Find existing AboutMe
        let about = yield about_model_1.AboutMe.findOne();
        if (about) {
            // Update existing
            about = yield about_model_1.AboutMe.findByIdAndUpdate(about._id, updateData, {
                new: true,
                runValidators: true,
            });
        }
        else {
            // Create new
            about = yield about_model_1.AboutMe.create(updateData);
        }
        res.status(200).json({
            success: true,
            data: about,
            message: "About Me saved successfully",
        });
    }
    catch (error) {
        console.error("Error in upsertAboutMe:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
});
exports.upsertAboutMe = upsertAboutMe;
// DELETE About Me
const deleteAboutMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const about = yield about_model_1.AboutMe.findOneAndDelete();
        if (!about) {
            return res.status(404).json({
                success: false,
                message: "No About Me info found to delete",
            });
        }
        res.status(200).json({
            success: true,
            message: "About Me deleted successfully",
        });
    }
    catch (error) {
        console.error("Error deleting AboutMe:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
});
exports.deleteAboutMe = deleteAboutMe;
