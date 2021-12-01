const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static('client'))


const port = process.env.PORT || 4040

app.listen(port, () => console.log(`server running on port ${port}!`))