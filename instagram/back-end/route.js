const express = require("express");
const router = express.Router();
const { getPosts, createPost } = require("./controller");

router
  .get("/", (req, res) => {
    res.status("200").json({ message: "alive" });
  })
  .get("/posts", getPosts)
  .post("/posts", createPost);
// .get('posts/:id', )
// .patch('/posts/:id')
// .delete('posts/:id')

module.exports = router;
