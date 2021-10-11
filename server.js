const express = require('express')
const app = express()
const port = 8000
const ejs = require('ejs')
const expressLayout = ('express-ejs-layouts')
const path = require('path')
const mongoose = require('mongoose')


//database connection



const url = 'mongodb://localhost/pizza';
    mongoose.connect(url, {
           // useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
          //  useFindAndModify: true
        });
        const connection = mongoose.connection;
        connection.once('open', () => { console.log('Connected Successfully...');})
        
        
        
         //.catch(err => {
       //   console.error('Not Connected')
           
        // });
       



app.use(express.static('public'))

app.use(expressLayout,()=>{})
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

require('./routes/web')(app)



app.listen(port,()=>{
  console.log(`listening on port ${port}`)
  
})