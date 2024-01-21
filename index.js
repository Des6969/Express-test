const express = require("express");

const app = express();

// printing hello world
app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});
app.get("/des", (req, res) => {
  res.json({ msg: "Hello Des" });
});

app.listen(8001, () => {
  console.log("Application is running");
});
