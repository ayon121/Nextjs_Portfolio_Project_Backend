import { Schema, model } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  socialLink: { type: String },
  photo: { type: String, required: true },
}, {
  timestamps : true
});

const Blog = model<IBlog>('Blog', blogSchema);
export default Blog;