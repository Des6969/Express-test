const router = require("express").Router(); //chaining of methods
const { properFormat } = require("../utils/properFormat");

// router.get("/", (req, res) => {
//   res.json({ data: `hello form Books` });
// });
//req.params=req.params.id//detail page
//req.query=?key=valuepagination
//req.body=raw json({"key":"value"})//form

// router.post("/", (req, res) => {
//   console.log(req.query, req.body);
// });
// router.put("/", (req, res) => {
//   console.log(req.query, req.body);
// });
// router.patch("/", (req, res) => {
//   console.log(req.query, req.body);
// });
// router.delete("/", (req, res) => {
//   console.log(req.body, req.body);
// });
router.post("/:number", (req, res) => {
  const result = properFormat(
    req.query.number || req.body.number || req.params.number
  );
  res.json({ msg: result });
});
module.exports = router;
