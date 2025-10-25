import Blog from "../modules/Blog.js";

export  function create(blogData, userId) {
    return Blog.create({
        ...blogData,
        owner: userId,
});
}