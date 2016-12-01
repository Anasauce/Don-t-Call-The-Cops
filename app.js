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

const app = express()

// app.set( 'models', models )

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

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

app.use(middleware)
app.use(webpackHotMiddleware(compiler))

app.get('*', (request, response) => {
  response.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')))
  response.end()
})

// catch 404 and forward to error handler
app.use(function(request, response, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
});

if (app.get('env') === 'development') {
  app.use(function(err, request, response, next) {
    response.status(err.status || 500);
    response.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, request, response, next) {
  response.status(err.status || 500);
  response.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
