import { Router } from "express";
import { blockService } from "../services/index.js";
import { isAuth } from "../middlewares/authMiddlewares.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const blogController = Router();

blogController.get('/', async (req, res) => {
    const blogs = await blockService.getAllBlogs();

    res.render('blogs', { blogs });
})

blogController.get('/create', isAuth,(req, res) => {
    res.render('blogs/create');
})

blogController.post('/create', isAuth, async (req, res) => {
    const blogData = req.body;
    const userId  = req.user.id;

    try {
         await blockService.create(blogData, userId);
         res.redirect('/blogs')
    } catch (err) {
         res.render('blogs/create', {
            error: getErrorMessage(err),    
            blog: blogData
        })
    }
   

   
})


export default blogController;