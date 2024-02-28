const { Comment } = require("../../db/schema");
const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../../middleware/auth");


router.post("/create", authenticateToken, async (req, res) =>  {

    //addd the code to create new comment
});

module.exports = router;