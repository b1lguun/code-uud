const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../express/user");

router
  .post("/", createUser)
  .get("/", getUsers)
  .get("/:id", getUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser)

module.exports = router;
