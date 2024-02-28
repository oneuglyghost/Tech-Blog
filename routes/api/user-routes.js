const { User } = require("../../db/schema");
const express = require("express");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add other user routes like login, update, delete

module.exports = router;