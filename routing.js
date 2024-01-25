const express = require("express");

const indexRouter = require("./routes");
const app = express();

app.use(express.json());
app.use("/", indexRouter);
//routing ko level ma kei error ayasi try catch throw garne

app.listen(8000, () => {
  console.log("Server is up");
});

//library function
//call function try garne
//math randomaizer
//
