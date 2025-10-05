"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    features: {
        type: [String],
        required: true,
        default: [],
    },
    thumbnail: {
        type: String,
        required: true,
    },
    liveUrl: {
        type: String,
        default: "",
    },
    repoUrl: {
        type: String,
        default: "",
    },
}, {
    timestamps: true,
});
exports.Project = (0, mongoose_1.model)("Project", projectSchema);
