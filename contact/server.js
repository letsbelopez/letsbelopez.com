const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8000

let corsOption;
if (process.env.NODE_ENV === 'production') {
  corsOptions = {
    origin: 'https://letsbelopez.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  } 
} else {
  corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  } 
}

app.use(cors(corsOptions))
app.use(bodyParser.json({type: 'application/json'}))

require('./app/routes')(app, {})
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})