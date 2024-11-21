const express = require('express')
const app = express()
const cors = require('cors')
require('./models/index.js')

// const  User = require('./models/userModel')
// const Temp = require('./models/tempModel')

// User.sync({ force: true });
// Temp.sync({ force: true });

const port = 3000

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})