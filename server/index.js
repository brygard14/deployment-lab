require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

const { ROLLBAR_TOKEN } = process.env

app.use(express.static('client'))

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.get('/', () => {
    rollbar.info("contact made")

    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4040

rollbar.log('Hello World!')

app.listen(port, () => console.log(`server running on port ${port}!`))