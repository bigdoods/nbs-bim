[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# nbs-bim

An unofficial client for [NBS BIM toolkit API](https://toolkit-api.thenbs.com/).


## API

This library uses [superagent](https://www.npmjs.com/package/superagent). All API responses are superagent reponses.

### `authenticate(clientId, clientSecret)`

Returns a promise of the token.

- `clientId`:
  The client ID.
- `clientSecret`:
  The client secret.

### `uniclass2015(token, notation, depth)`

Returns a promise of the response.

- `token`:
  The token returned from `authenticate()`.
- See [API docs](https://toolkit-api.thenbs.com/routes/GET-definitions-uniclass2015-notation-depth) for the rest of the arguments.

### `uniclass2015ancestors(token, ancestors)`

Returns a promise of the response.

- `token`:
  The token returned from `authenticate()`. 
- See [API docs](https://toolkit-api.thenbs.com/routes/GET-definitions-uniclass2015-ancestors-notation) for the rest of the arguments.

### `loi(token, notation, level)`

Returns a promise of the response.

- `token`:
  The token returned from `authenticate()`.
- See [API docs](https://toolkit-api.thenbs.com/routes/GET-definitions-loi-notation-level) for the rest of the arguments.