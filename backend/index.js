const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')


connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//creating routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, function (err) {
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", port);
})