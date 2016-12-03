const Knex = require('knex')
const config = require('../../knexfile')[process.env.NODE_ENV]
const knex = Knex(config)

const getAllResources= () => {
  return knex.table('resources').select('*')
}

module.exports = {
  getAllResources
}
