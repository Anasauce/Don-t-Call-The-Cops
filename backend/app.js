const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const apiRoutes = require('./api/index.js')
const server = express()

const cors = require( './cors' )

// uncomment after placing your favicon in /public
//server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser())

server.use( cors )
server.use('/api', apiRoutes)

// server.get('/', (request, response) => {
//   response.sendFile(path.join(__dirname, './client/index.html'))
// })

// catch 404 and forward to error handler
server.use(function(request, response, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
});

if (server.get('env') === 'development') {
  server.use(function(err, request, response, next) {
    response.status(err.status || 500);
    response.json( {
      message: err.message,
      error: err
    });
  });
}

server.use(function(err, request, response, next) {
  response.status(err.status || 500);
  response.json( {
    message: err.message,
    error: {}
  });
});


module.exports = server;
