import Blog from "../modules/Blog.js";

export function getAllBlogs(){
    return Blog.find();
}

export  function create(blogData, userId) {
    return Blog.create({
        ...blogData,
        owner: userId,
});
}