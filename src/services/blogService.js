import Blog from "../modules/Blog.js";

export function getLatest(){
    return Blog.find().sort({_id: -1}).limit(3);
}

export function getAllBlogs(){
    return Blog.find();
}

export  function create(blogData, userId) {
    return Blog.create({
        ...blogData,
        owner: userId,
});
}