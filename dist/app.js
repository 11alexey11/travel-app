"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require("morgan");
var cors = require("cors");
// import * as path from 'path';
var countries_1 = require("./routes/countries");
var app = express();
app.use(logger('dev'));
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/countries', countries_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.json({
        statusCode: 404
    });
});
// error handler
app.use(function (err, req, res, next) {
    res.json({
        statusCode: 500,
        message: err.message,
        stack: err.stack
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map