"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const Blogrouter = (0, express_1.Router)();
// For admin
Blogrouter.post('/add', blog_controller_1.createBlog);
Blogrouter.delete('/:id', blog_controller_1.deleteBlog);
Blogrouter.put('/:id', blog_controller_1.updateBlog);
//For All Users
Blogrouter.get('/', blog_controller_1.getAllBlogs);
Blogrouter.get('/:id', blog_controller_1.getBlogById);
Blogrouter.get('/latestsix/blog', blog_controller_1.getLatestBlogs);
exports.default = Blogrouter;
