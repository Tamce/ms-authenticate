var express = require("express");
var app = express();
var router = require("src/routes");

app.use("/", router);
app.listen(5000);
