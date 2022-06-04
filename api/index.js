const express = require('express')
const dbConnect = require('./db/mongo')
const app = express()
const cors = require('cors')
require('dotenv').config()

// ||
app.set('PORT', process.env.PORT || 3000)

//
app.use(cors())
app.use(express.json())

//
app.use("/api", require('./routes/index'))

//
app.listen(app.get('PORT'), () => {
    console.log('listen on port', app.get('PORT'))
})

//dbConnect