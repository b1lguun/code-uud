const express = require("express");
const port = 6999;

const app = express();

// app.get("/", (request, response) => {
//   response.send("hi");
// });

// app.get("/users", (request, response) => {
//     response.send([{name: 'jack'}, {name: 'jane'}, {name: 'bataa'}]);
// });
// app.get("/bat", (request, response) => {
//     response.send([{name: 'jane'}]);
// });
// app.delete("/users", (request, response) => {
//     response.send([{name: 'bataa'}]);

// });

app.use('/', router)

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
