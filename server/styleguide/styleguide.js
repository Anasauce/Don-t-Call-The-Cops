const express = require('express')
const router = new express.Router()
const path = require('path')

router.get('/', (request, response) => {
  response.sendFile(path.join(_dirname, '../styleguide.html'))
})

module.exports = router
