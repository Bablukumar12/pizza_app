const express = require('express')
const app = express()
const port = 8000
const ejs = require('ejs')
const expressLayout = ('express-ejs-layouts')
const path = require('path')
app.get('/',(req,res)=>{
  res.render('home')
})
app.use(expressLayout,()=>{})
app.set('views',path.join(__dirname,'/Resources/Views'))
app.set('view engine','ejs')


app.listen(port,()=>{
  console.log(`listening on port ${port}`)
  
})
