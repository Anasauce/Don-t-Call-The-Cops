const cors = ( request, response, next ) => {
  response.header( "Access-Control-Allow-Origin", "*" )
  response.header( "Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS" )
  response.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials" )
  response.header( "Access-Control-Allow-Credentials", "true" )
  next()
}

module.exports = cors
