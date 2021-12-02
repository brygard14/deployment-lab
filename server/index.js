require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

// const { ROLLBAR_TOKEN } = process.env

app.use(express.static('client'))

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '4a667ec47e074d2daba3cee132c97b2a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))

    rollbar.info("contact made")
})

const port = process.env.PORT || 4040

rollbar.log('Hello World!')

app.listen(port, () => console.log(`server running on port ${port}!`))