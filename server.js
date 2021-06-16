require('dotenv').config()

const express = require('express')
const app = express()
const { join } = require('path')

// import sequelize connection

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
app.listen(process.env.PORT || 3000)
