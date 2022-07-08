const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
