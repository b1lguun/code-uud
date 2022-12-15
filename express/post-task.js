const express = require("express");
const port = 7000;

const app = express();
const router = require("./router");

var posts = [];

// app.get("/", (req, res) => {
//   res.send("hi");
// });
// app.post("/post", (req, res) => {
//   res.status(333).send([{ title: "hi", message: "message" }]);
// });

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
