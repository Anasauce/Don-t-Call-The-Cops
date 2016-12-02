import Knex from 'knex'
require('../../config')

const config = require('../../knexfile')[process.env.NODE_ENV]
const knex = knex(config)

knex.truncateAllTables = function(){

  return knex.schema.createTableIfNotExists('resources', function(table) {
    table.increments()
    table.string('name')
    table.string('resource_type')
    table.stirng('phone_number')
    table.string('address')
    table.string('website_url')
    table.integer('zipcode')
    table.string('create_by')
    table.string('description')
    table.foreign('')
  })
}
