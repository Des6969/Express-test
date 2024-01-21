const express = require("express");
const app = express();

// app.get("/:fname/:lname", (req, res) => {
//   const fname = req.params.fname;
//   const lname = req.params.lname;
//   res.json({ msg: `hello ${fname} ${lname}` });
// });
app.get("/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const sum = Number(a) + Number(b);

  res.json({ msg: `The sum is ${sum} ` });
});
app.listen(8000, () => {
  console.log("Server is up");
});
