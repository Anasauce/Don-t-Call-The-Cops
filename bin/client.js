const express = require('express')
const router = express.Router()
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const webpack = require('webpack')
const config = require('../webpack.config.js')

const port = 3000
const server = express()
const compiler = webpack(config)
const apiRoutes = require('../server/api')

server.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

server.use(require('webpack-hot-middleware')(compiler))

server.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../index.html'))
})

server.listen(port, function onAppListening(err){
  if (err) {
    console.error(err)
  } else {
    console.info('webpack dev server listening on port %s', port )
  }
})

server.use(express.static('../build/'))
server.use(bodyParser.json())
server.use('/api', apiRoutes)

module.exports = router
