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
const app = express()
const compiler = webpack(config)
const apiRoutes = require('../server/api')

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../index.html'))
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
