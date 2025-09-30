import { Router } from 'express';

import { createBlog, getAllBlogs, getBlogById, deleteBlog, getLatestBlogs, updateBlog } from './blog.controller';
import { checkAuth } from '../../Middlewares/CheckAuth';
import { Role } from '../user/user.interface';


const Blogrouter = Router();

// For admin
Blogrouter.post('/add', checkAuth( Role.SUPER_ADMIN),   createBlog);
Blogrouter.delete('/:id' , checkAuth(Role.SUPER_ADMIN) ,deleteBlog);
Blogrouter.put('/:id', checkAuth(Role.SUPER_ADMIN) , updateBlog);

//For All Users
Blogrouter.get('/', getAllBlogs);
Blogrouter.get('/:id', getBlogById);
Blogrouter.get('/latestsix/blog', getLatestBlogs);




export default Blogrouter;