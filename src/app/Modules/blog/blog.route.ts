import { Router } from 'express';

import { createBlog, getAllBlogs, getBlogById, deleteBlog, getLatestBlogs, updateBlog } from './blog.controller';



const Blogrouter = Router();

// For admin
Blogrouter.post('/add', createBlog);
Blogrouter.delete('/:id' , deleteBlog);
Blogrouter.put('/:id',  updateBlog);

//For All Users
Blogrouter.get('/', getAllBlogs);
Blogrouter.get('/:id', getBlogById);
Blogrouter.get('/latestsix/blog', getLatestBlogs);




export default Blogrouter;