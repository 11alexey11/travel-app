import * as express from 'express';
import * as logger from 'morgan';
import * as cors from 'cors';
// import * as path from 'path';
import countriesRouter from './routes/countries';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/countries', countriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({
    statusCode: 404
  });
});

// error handler
app.use(function(err, req, res, next) {
  res.json({
    statusCode: 500,
    message: err.message,
    stack: err.stack
  });
});

export default app;
