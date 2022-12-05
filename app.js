require('dotenv').config()
const express = require('express')
const connectToDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectToDB()
app.use('/', userRoutes)

module.exports = app
