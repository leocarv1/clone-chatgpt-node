// Importação das bibliotecas que serão utilizadas
const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

require('dotenv').config()

const app = express()

// tudo que a aplicação for utilizar
app.use(express.json())
app.use(cors())
app.use(routes)

module.exports = app
