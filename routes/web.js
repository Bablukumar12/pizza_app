const homeController = require('../app/http/Controllers/homeController')
const authController = require('../app/http/Controllers/authController')
const cartController = require('../app/http/Controllers/customers/cartController')


function initRoutes(app) {
  
  app.get('/',homeController().index)
  app.get('/cart',cartController().index)
  app.get('/login',authController().login)
  app.get('/register',authController().register)
  
}

module.exports = initRoutes