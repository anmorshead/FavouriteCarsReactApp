//our application configuration files

//import application configuration files
// var createError = require('http-errors');
import createError from 'http-errors';
// var express = require('express');
import express from 'express';
// var path = require('path');
import path from 'path'
// var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
// var logger = require('morgan');
import logger from 'morgan';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

//connect to our mongoDB (async action-returns promise)
mongoose.connect('mongodb://localhost:27017/Cars')
  .then(() => {
    console.log("Database connected successfully")
  })
  .catch(err => {
    console.log(`Error: Unable to connect ${err.message}`)
  })

//routers
// var indexRouter = require('./routes/index.js');
import indexRouter from './routes/index.js'
// var usersRouter = require('./routes/users.js');
import usersRouter from './routes/users.js'
//new router
import carsRouter from './routes/cars.js'



//instance of express
var app = express();

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//define various middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//use a couple of routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars', carsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

//module.exports = app;
export default app;