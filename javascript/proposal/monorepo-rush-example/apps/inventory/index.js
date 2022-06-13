const express = require("express");
const { sayHello } = require("hello");
const { sayHi } = require("hi");

sayHi("hello typescript, this is javascript");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    hi: "mom",
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  sayHello(`inventory service listening at port ${port}`);
});
