const config = require('../knexfile.js')
const knex = require('knex')(config)

//knex.migrate.latest([config]) //cria automaticamente as tabelas
module.exports = knex