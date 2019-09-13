require('dotenv').load()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const inventoryRoutes =require('./routes/inventory.js')
const userRoutes = require('./routes/users.js')
const photoRoutes = require('./routes/photos.js')

const app = express()
const port = process.env.PORT || 2999


app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/users', userRoutes)
app.use('/photos', photoRoutes)
app.use('/inventory', inventoryRoutes)

app.use((req, res) => {
  const status = 404;
  const message = `Could not find that`
  res.status(status).json({status, message})
})

app.use((error, req, res, next) => {
  console.log('In internal error', error.message);
  const message = error.message || 'Internal error'
  const status = error.status || 500
  res.status(status).json({message})
})

app.listen(port, () => {
  console.log('Listening on port: ', port);
})