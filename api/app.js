const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const moviesRouter = require('./routes/movies');
const discussionRouter = require('./routes/discussion/DiscussionBoardApi.js');
const testAPIRouter = require("./routes/testAPI");
const app = express();


app.use(function (req, res, next) {
  res.setHeader('Content-Security-Policy', 'default-src self; img-src *; media-src *; script-src *');
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use("/testAPI", testAPIRouter);
app.use('/discussionBoardApi', discussionRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cinema_db', { useNewUrlParser: true }).then(() => {
  console.log("connection ready");
}, (err) => { console.log("THIS IS THE ERROR I AM PRINTING: " + err) });

module.exports = app;

