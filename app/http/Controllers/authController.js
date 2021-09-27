function authController() {
  return {
    login(req,res) {
      res.render('path/login')
    },
    register(req,res) {
     res.render('path/register')
  }
}
}

module.exports = authController