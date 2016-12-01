const express = require('express')
const router = express.Router()
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const webpack = require('webpack')
const config = require('../webpack.config.js')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const port = 3000
const app = express()
const compiler = webpack(config)
const apiRoutes = require('../api')

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

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
  response.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../build/index.html')))
  response.end()
})

app.listen(port, function onAppListening(err){
  if (err) {
    console.error(err)
  } else {
    console.info('webpack dev server listening on port %s', port )
  }
})

app.use(express.static('../build/'))
app.use(bodyParser.json())
app.use('/api', apiRoutes)

module.exports = router
