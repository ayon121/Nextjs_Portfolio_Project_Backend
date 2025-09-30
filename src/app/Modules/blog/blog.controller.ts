/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express';

import { QueryBuilder } from '../../utils/QueryBuilder';
import { IBlog } from './blog.interface';
import Blog from './blog.model';



export const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, socialLink , photo } = req.body;

    const newBlog: IBlog = {
      title,
      description,
      socialLink,
      photo,
    };

    const created = await Blog.create(newBlog);
    res.status(201).json({ success : true , message: "Blog created successfully", blog: created });
  } catch (error: any) {
    next(error);
  }
};

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const builder = new QueryBuilder(Blog.find(), req.query as Record<string, string>);

    // Apply query features
    builder.filter().search(['title']).sort().fields().paginate();

    const blogs = await builder.build();
    const meta = await builder.getMeta();

    res.status(200).json({
      success: true,
      message: 'Blogs fetched successfully',
      data: blogs,
      meta
    });

  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error: any) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const result = await Blog.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


export const getLatestBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(6);
    res.status(200).json(blogs);
  } catch (error: any) {
    console.error('Error fetching latest blogs:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


export const updateBlog = async (req: Request, res: Response) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog updated successfully', blog: updatedBlog });
  } catch (error: any) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};