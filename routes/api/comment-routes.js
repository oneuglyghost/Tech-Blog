const { Comment } = require("../../db/schema");
const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../../middleware/auth");

// Create a new comment
router.post("/create", authenticateToken, async (req, res) => {
  try {
    const { content, postId } = req.body;
    const newComment = await Comment.create({ content, postId });
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a comment
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const commentId = req.params.id;
    const { content } = req.body;
    const updatedComment = await Comment.update({ content }, { where: { id: commentId } });
    if (updatedComment[0] === 0) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json({ message: "Comment updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;