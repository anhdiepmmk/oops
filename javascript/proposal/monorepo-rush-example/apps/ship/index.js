const express = require("express");
const { sayWorld } = require("world");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    hi: "dad",
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  sayWorld(`ship service listening at port ${port}`);
});
