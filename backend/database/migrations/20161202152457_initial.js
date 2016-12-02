
exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('resources', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('resource_type').notNullable()
      table.string('phone_number').notNullable()
      table.string('address')
      table.string('website_url').notNullable()
      table.integer('zipcode', [10])
      table.string('create_by')
      table.text('description', [500])
      table.timestamp('created_at')
      table.string('service_region')
    }),

    knex.schema.createTable('issues', table => {
      table.increments('id').primary()
      table.integer('resource_id').notNullable()
      table.boolean('phone_wrong').defaultTo(false)
      table.boolean('location_wrong').defaultTo(false)
      table.boolean('type_wrong').defaultTo(false)
      table.boolean('is_active').defaultTo(true)
      table.text('other', [500])
    }),

    knex.schema.createTable('comments', table => {
      table.increments('id').primary()
      table.integer('resource_id').notNullable()
      table.integer('response_time')
      table.integer('use_again')
      table.integer('helpful')
      table.text('comment', [500])
    })

  ])

};

exports.down = function(knex, Promise) {

  return Promise.all( [
    knex.schema.dropTable('resources'),
    knex.schema.dropTable('issues'),
    knex.schema.dropTable('comments')
  ])
};
