const express = require('express')
const app = express()
const cors = require('cors')
require('./models/index.js')
const userRouter = require('./routes/userRoute')
require('dotenv').config()


const port = process.env.PORT || 4000

app.use(cors())

app.use(express.json())

app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})