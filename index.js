const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    message: "dari vps server v 3.0",
  });
});

app.listen(5000, () => console.log("app jalan di 5000 "));
