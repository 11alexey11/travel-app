const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routesUrls = require('./routes/routesUrls')
const fileMiddleware = require('./middleware/file')

const app = express();

const port = 4000;

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, () => console.log("Database connected"))

app.use(logger('dev'));
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(fileMiddleware.single('avatar'))
app.use('/', routesUrls);

app.use(function (req, res, next) {
    res.json({
        statusCode: 404
    });
});

app.use(function (err, req, res, next) {
    res.json({
        statusCode: 500,
        message: err.message,
        stack: err.stack
    });
});

app.listen(process.env.PORT || port, () => console.log("server is up and running"))

