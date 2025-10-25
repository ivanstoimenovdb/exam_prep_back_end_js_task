import { Router } from "express";
import { blogService } from "../services/index.js";

const homeController = Router();

homeController.get('/', (req, res) => {
    const latestBlogs = blogService.getLatest();

    res.render('home', { blogs: latestBlogs });

    res.render('home');
});


export default homeController;