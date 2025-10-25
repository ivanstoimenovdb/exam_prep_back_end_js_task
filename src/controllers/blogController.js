import { Router } from "express";
import { blogService } from "../services/index.js";
import { isAuth } from "../middlewares/authMiddlewares.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const blogController = Router();

blogController.get('/', async (req, res) => {
    const blogs = await blogService.getAllBlogs();

    res.render('blogs', { blogs });
})

blogController.get('/create', isAuth,(req, res) => {
    res.render('blogs/create');
})

blogController.post('/create', isAuth, async (req, res) => {
    const blogData = req.body;
    const userId  = req.user.id;

    try {
         await blogService.create(blogData, userId);
         res.redirect('/blogs')
    } catch (err) {
         res.render('blogs/create', {
            error: getErrorMessage(err),    
            blog: blogData
        })
    }
   

   
})


export default blogController;