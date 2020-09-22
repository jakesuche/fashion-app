const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const exhbs = require('express-handlebars')



dotenv.config({path:'./config.env'})

// mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true});
// mongoose.connection.on('error', console.error.bind(console,'Databse connection error'))
// mongoose.connection.once('open', function(){
//     console.log('connected to Database')
// })
app.get('/', function(req,res){
    console.log('uchechukwu')
    res.send('hello:message')
})

app.set('views', path.join(__dirname,'views'))


const port = app.get('port')
app.listen(process.env.PORT || 8888, function(){
    console.log(`app listen at port ${app.get('port')}`)
})




