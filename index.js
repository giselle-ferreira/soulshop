// Define variável de ambiente
require('dotenv/config')


const express = require('express')
const exprhbs = require('express-handlebars')
const app = express()

// Para que o express possa ler form e entender formato json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Setando qual a view engine
app.engine('handlebars', exprhbs.engine())
app.set('view engine', 'handlebars')

// Rotas
const produtosRoutes = require('./routes/produtosRoutes')
app.use(produtosRoutes)

app.listen(3000)