const express = require("express");
const bodyParser = require("body-parser");
const port = 8000;
const app = express();
const connect = require("./db");
connect();
const route = require("./route");

app.use(bodyParser.json());
app.use("/", route);

app.listen(port, () => {
  console.log(`express app listening on http://localhost:${port}`);
});
