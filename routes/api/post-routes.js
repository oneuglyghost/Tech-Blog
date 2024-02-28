const {post} = require("../../db/schema");
const express = require("express");
const router = express.Router();
const {authenticateToken} = require('../../middleware/auth');


router.post("/create", authenticateToken, async (req, res) => {
    // create new post 
    try {
        const {title, content} = req.body;
        const newpost = await post.create({title, content });
        res.status(201).json(newPost);
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create post" });
    }
});

//  delete  a post route
router.delete("./id", authenticateToken, async (req, res) => {
    try {
        const postId =req.params.id;
        const deletedPost = await Post.destroy({ where: { id: postId } });
        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully'})
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete post' });
    }
})

module.exports = router;