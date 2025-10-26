import { Router } from "express";
import { blogService } from "../services/index.js";
import { isAuth } from "../middlewares/authMiddlewares.js"

const homeController = Router();

homeController.get('/', async (req, res) => {
    const latestBlogs = await blogService.getLatest();

    res.render('home', { blogs: latestBlogs });
});

homeController.get('/profile', isAuth,async (req, res) => {
    const userId = req.user.id;

    const createdBlogs = await blogService.getAllByOwner(userId);
    const countOwnerBlogs = createdBlogs.length;
    const followedBlogs = await blogService.getAllByFollower(userId);
    const countFollowedBlogs = followedBlogs.length;

    res.render('profile', {createdBlogs, followedBlogs, countOwnerBlogs, countFollowedBlogs });
})


export default homeController;