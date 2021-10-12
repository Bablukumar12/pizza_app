require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000
const ejs = require('ejs')
const expressLayout = ('express-ejs-layouts')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoStore =require('connect-mongo') 
new MongoStore(session)


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
 
 
  //session store 
  
 /*let mongoStore = new MongoDbStore({
                      mongooseConnection: connection,
                      collection: 'sessions'
                })  */
  
        
       
//session config
 app.use(session({
    secret :process.env.cookie_secret,
    resave: false,
    store: MongoStore.create({mongoUrl:'mongodb://localhost/pizza'})
   //saveUninitialized: true,
    //cookie: { maxAge: 1000*60*60*24}
}))

app.use(flash())


app.use(express.static('public'))

app.use(expressLayout,()=>{})
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

require('./routes/web')(app)



app.listen(port,()=>{
  console.log(`listening on port ${port}`)
  
})