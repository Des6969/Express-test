const router = require("express").Router(); //chaining of methods

router.get("/", (req, res) => {
  res.json({ data: `hello form Books` });
});
module.exports = router;
