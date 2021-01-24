const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))

server.use('/test', routes)

module.exports = server