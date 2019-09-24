/*
 * API proxy configuration.
 * This allows you to proxy HTTP request like `http.get('/api/stuff')` to another server/port.
 * This is especially useful during app development to avoid CORS issues while running a local server.
 * For more details and options, see https://angular.io/guide/build#proxying-to-a-backend-server
 */
module.exports = {
  '/api': {
    target: 'http://localhost:7071',
    secure: false
  }
};
