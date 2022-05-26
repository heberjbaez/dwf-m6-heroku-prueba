"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
// console.log(process.env);
app.get("/hola", function (req, res) {
    res.json({
        message: "hola"
    });
});
app.listen(port, function () {
    console.log("port: " + port);
});
