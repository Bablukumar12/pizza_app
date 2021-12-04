require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000
const ejs = require('ejs')
const expressLayouts = ('express-ejs-layouts')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoStore = require('connect-mongo')
//new MongoDbStore(session)


//database connection



// const url = 'mongodb://localhost/pizza';

// mongoose.connect(url, {
//   // useCreateIndex: true,
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//    // useFindAndModify: true
// });
const connection = mongoose.connection;
connection.once('open', () => { console.log('Connected Successfully...');})


// .catch(err => {
//   console.error('Not Connected')
    
//  });

       
        
        
         
 
 
  //session store 
  
/* let mongoStore = new MongoDbStore({
                      mongooseConnection: connection,
                      collection: 'sessions'
                })
  */
        
       
//session config
/* app.use(session({
    secret :process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24}
}))*/


const clientP = mongoose.connect(
  'mongodb://127.0.0.1:27017',
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(m => m.connection.getClient())

app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24},
  store: MongoStore.create({
    clientPromise: clientP,
    // dbName: "example-db-mongoose",
    stringify: false,
    autoRemove: 'interval',
    autoRemoveInterval: 1
  })
}));

app.use(flash())


app.use(express.static('public'))
app.use(express.json())

// global middleware
app.use((req,res,next) => {
  res.locals.session = req.session
  next()
})


app.use(expressLayouts,() =>{});
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

require('./routes/web')(app)



app.listen(port,()=>{
  console.log(`listening on port ${port}`)
  
})