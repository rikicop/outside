const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')

require('dotenv').config()

const port = process.env.PORT || 8000

connectDB()

const app = express()

//app.use(express.json()) // Parece no ser necesario
app.use(express.urlencoded({ extended: false }))

app.use('/api/metas', require('./routes/metaRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`El Servidor está corriendo en el puerto ${port}`))