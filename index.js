const express = require('express')
const app = express()
require('dotenv').config()
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const dbCtrl = require('./controller')
app.use(express.json())


//get a better understanding of what these do below!!

massive(CONNECTION_STRING).then(dbInstance=>{
  app.set('db', dbInstance)
}).catch((err)=> console.log(`error: ${err}`))



//requests are done! 
app.get('/api/products', dbCtrl.getAll)
app.get('/api/products/:id', dbCtrl.getOne)
app.post('/api/products/create', dbCtrl.create)
app.delete('/api/products/:id', dbCtrl.delete)
app.put('/api/products/:id', dbCtrl.update)



app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))


