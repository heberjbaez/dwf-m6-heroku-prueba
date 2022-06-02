"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
require("dotenv/config");
var dev = process.env.NODE_ENV == "deveploment";
app.use(express.static("dist"));
//handler
app.get("/env", function (req, res) {
    res.json({
        environment: process.env.NODE_ENV
    });
});
app.get("/db-env", function (req, res) {
    res.json({
        "db-host": process.env.DB_HOST
    });
});
app.use(express.static("dist"));
// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/dist/index.html");
// });
app.listen(port, function () {
    console.log("port: " + port);
});
