const express = require('express')
const router = new express.Router()

router.get('/', (request, response) => {
  const data = {
    'name': 'person',
    'people': 'many',
    'apple': 'red'
  }
  response.json(data)
})

router.get('/styleguide', (request, response) => {
  response.render('../')
})

module.exports = router
