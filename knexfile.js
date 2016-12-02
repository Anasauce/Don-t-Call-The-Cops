const defaultConfig = (env) => {
  const connectionString = (
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@localhost:5432/justus-${env}`
  )

  return {
    client: 'postgresql',
    connection: connectionString,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/backend/database/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: __dirname + `/backend/database/seeds/${env}`
    }
  }
}

module.exports = {
  test: defaultConfig('test'),
  development: defaultConfig('development'),
  production: defaultConfig('production'),
};
