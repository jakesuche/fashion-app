let exphs = require('express-handlebars')
let path = require('path')
let express = require('express');
let moment = require('moment');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');
let session = require('express-session');
const fileUpload = require('express-fileupload')
const flash = require('express-flash')
const passport = require('passport')



module.exports = function(app){
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(fileUpload());
    app.use(session({
        secret: 'keyboard cat',
        resave: true,
        saveUninitialized: true
    //  cookie: { secure: true }
    }));
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    // userAuth()

    return app
}


