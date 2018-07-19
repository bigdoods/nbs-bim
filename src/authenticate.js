/*

### `authenticate(clientId, clientSecret)`

Returns a promise of the token.

- `clientId`:
  The client ID.
- `clientSecret`:
  The client secret.

*/

const querystring = require('querystring')
const request = require('superagent')
const config = require('../config')

const authCode = 'Basic ' + Buffer.from(config.NBS_clientId + ':' + config.NBS_clientSecret).toString('base64')
const formData = querystring.stringify({ scope: 'bimtoolkitapi', grant_type: 'client_credentials' })

let tokens

let time

const uri = 'https://identity.thenbs.com/core/connect/token'

module.exports = function getToken () {
  request
    .post(uri)
    .type('form')
    // .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', authCode)
    .send('{ "scope": "bimtoolkitapi", "grant_type": "client_credentials"}')

    // not supposed to use end() when using promises!! Google!!

    .end(function(err, response){
      return new Promise((resolve, reject) => {
        if (err) reject (err)
        else {
          tokens = JSON.parse(response).access_token
          resolve(tokens)
        }
      })
    })
}

// Using the Request library
 
      // ({
      //   headers: {
      //     'Authorization': authCode,
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   },
      //   uri: 'https://identity.thenbs.com/core/connect/token',
      //   body: formData,
      //   method: 'POST'
      // }, function (err, res, body) {
      //   if (err) reject(err)
      //   else {
      //     tokens = JSON.parse(body).access_token
      //     time = Math.round(new Date() / 1000)
      //     resolve(tokens)
      //   }
      // }
      // )
