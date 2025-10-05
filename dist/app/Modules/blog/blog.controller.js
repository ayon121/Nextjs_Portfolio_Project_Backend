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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.getLatestBlogs = exports.deleteBlog = exports.getBlogById = exports.getAllBlogs = exports.createBlog = void 0;
const QueryBuilder_1 = require("../../utils/QueryBuilder");
const blog_model_1 = __importDefault(require("./blog.model"));
const createBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, socialLink, photo } = req.body;
        const newBlog = {
            title,
            description,
            socialLink,
            photo,
        };
        const created = yield blog_model_1.default.create(newBlog);
        res.status(201).json({ success: true, message: "Blog created successfully", blog: created });
    }
    catch (error) {
        next(error);
    }
});
exports.createBlog = createBlog;
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const builder = new QueryBuilder_1.QueryBuilder(blog_model_1.default.find(), req.query);
        // Apply query features
        builder.filter().search(['title']).sort().fields().paginate();
        const blogs = yield builder.build();
        const meta = yield builder.getMeta();
        res.status(200).json({
            success: true,
            message: 'Blogs fetched successfully',
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
exports.getAllBlogs = getAllBlogs;
const getBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_model_1.default.findById(req.params.id);
        if (!blog)
            return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.getBlogById = getBlogById;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blog_model_1.default.findByIdAndDelete(req.params.id);
        if (!result)
            return res.status(404).json({ message: 'Blog not found' });
        res.json({ message: 'Blog deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.deleteBlog = deleteBlog;
const getLatestBlogs = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blog_model_1.default.find().sort({ createdAt: -1 }).limit(6);
        res.status(200).json(blogs);
    }
    catch (error) {
        console.error('Error fetching latest blogs:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.getLatestBlogs = getLatestBlogs;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBlog = yield blog_model_1.default.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json({ message: 'Blog updated successfully', blog: updatedBlog });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.updateBlog = updateBlog;
