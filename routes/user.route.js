const router = require("express").Router(); //chaining of methods

router.get("/", (req, res) => {
  res.json({ data: `hello form user` });
});
module.exports = router;
