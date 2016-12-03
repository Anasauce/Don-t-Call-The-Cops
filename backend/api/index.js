const express = require('express')
const router = new express.Router()
const database = require('../database/select')

router.get('/', (request, response) => {

  database.getAllResources()
  .then( resources =>
    response.json(resources)
  )

})


module.exports = router
