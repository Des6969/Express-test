const express = require("express");
const app = express();

app.get("/Sum", (req, res) => {
  res.json({ msg: "I agdgadsg " });
});
app.listen(8000, () => {
  console.log("Server is up");
});
