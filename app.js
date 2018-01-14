/**
 * Created by timmeno1 on 15.01.2018.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var env = require('./config/config').env;


var app = express();


// Mongoose connection +
var mongoose = require("mongoose");
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

app.use(session({
  secret: 'i need more beers',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    url: env.dbUrl
  })
}));

// Routes

var index = require('./routes/index');
var user = require('./routes/user');



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));



app.use('/', index);
app.use('/user', user);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

