import Blog from "../modules/Blog.js";

export function getLatest(){
    return Blog.find().sort({_id: -1}).limit(3);
}

export function getAllBlogs(){
    return Blog.find();
}

export async function follow(blogId, userId){
    // easy and sensetive case : 
    // returns promise. --> need async and await
    const blog = await Blog.findById(blogId);

    blog.followers.push(userId);

    return blog.save();

    //mongo db case:
    // return Blog.findByIdAndUpdate(blogId, {$push: { followers: userId } });

}

export function getOne(blogId){
    // return Blog.findById(blogId); --> Before details.
    
    // after getting e-mail of owner.
    // return Blog.findById(blogId).populate('owner'); 

    // after following functionality.
    return Blog.findById(blogId).populate(['owner', 'followers']); 
}

export function remove(blogId, userId) {
    return Blog.findByIdAndDelete(blogId);
}

export  function create(blogData, userId) {
    return Blog.create({
        ...blogData,
        owner: userId,
});
}