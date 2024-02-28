const {post} = require("../../db/schema");
const express = require("express");
const router = express.Router();
const {authenticateToken} = require('../../middleware/auth');


router.post("/create", authenticateToken, async (req, res) => {
    // add to create new post 
});

// any other route like delete route

module.exports = router;