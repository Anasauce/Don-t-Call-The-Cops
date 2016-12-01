const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const webpack = require('webpack')
const config = require('./webpack.config.js')
const compiler = webpack(config)
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const server = express()


// uncomment after placing your favicon in /public
//server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser())

const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: false,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})

server.use(middleware)
server.use(webpackHotMiddleware(compiler))

server.get('*', (request, response) => {
  response.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')))
  response.end()
})

// catch 404 and forward to error handler
server.use(function(request, response, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
});

if (server.get('env') === 'development') {
  server.use(function(err, request, response, next) {
    response.status(err.status || 500);
    response.render('error', {
      message: err.message,
      error: err
    });
  });
}

server.use(function(err, request, response, next) {
  response.status(err.status || 500);
  response.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = server;
