const express = require('express')
const app = express()
const port = 8000
const ejs = require('ejs')
const expressLayout = ('express-ejs-layouts')
const path = require('path')


app.use(express.static('public'))

app.use(expressLayout,()=>{})
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

require('./routes/web')(app)



app.listen(port,()=>{
  console.log(`listening on port ${port}`)
  
})