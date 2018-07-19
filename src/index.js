const config = require('../config')
const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookies = require('cookie-parser')  // Note that express-session ^v1.5 does not need cookie-parser as https://www.npmjs.com/package/express-session also this is not recommended for production ready apps.
const crypto = require('crypto')
const url = require('url')
const auth = require('./authenticate')

// function generateRandomValue () {
//   return crypto.randomBytes(24).toString('hex')
// }

const app = express()
app.set('port', config.port || 1337)
// app.use(cookies(config.session.secret))
// app.use(bodyParser.json())
// app.use(session({ maxAge: 1000 * 60 * 60 * 24, resave: true, saveUninitialized: true, secret: config.session.secret }))
// app.use(express.static('public'))

app.get('/auth', (req, res) => {
    Promise.resolve(auth()).then(
      (response) => res.send(console.log("Yo, that em code u were looking for ... :", response)
    )).catch(
      (err) => console.log(err)
    )
})

app.listen(config.port)
var time = (new Date()).toUTCString()
console.log('Server listening on port ' + config.port + ', started at ' + time)
