const homeController = require('../app/http/Controllers/homeController')
const authController = require('../app/http/Controllers/authController')


function initRoutes(app) {
  
  app.get('/',homeController().index)
  
  
  
  app.get('/cart',(req,res)=>{
  res.render('customers/cart')
})


app.get('/login',authController().login)


app.get('/register',authController().register)

  

}

module.exports = initRoutes