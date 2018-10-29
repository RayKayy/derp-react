const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://localhost:3000/'
  }));

  app.use(proxy('/register', {
    target: 'http://localhost:3000/'
  }));

  app.use(proxy('/login', {
    target: 'http://localhost:3000/'
  }));

  app.use(proxy('/itineraries', {
    target: 'http://localhost:3000/'
  }));

  app.use(proxy('/logout', {
    target: 'http://localhost:3000/'
  }));
  app.use(proxy('/loggedin', {
    target: 'http://localhost:3000/'
  }));
}