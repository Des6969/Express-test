const router = require("express").Router();
const bookRouter = require("./book.route");
const userRouter = require("./user.route");
const blogRouter = require("./blog.route");
const rolesRouter = require("./roles.route");
//route 1
router.get("/", (req, res) => {
  res.json({ msg: "hello" });
});
router.use("/books", bookRouter);

router.use("/user", userRouter);
router.use("/blog", blogRouter);
router.use("/roles", rolesRouter);
module.exports = router;
