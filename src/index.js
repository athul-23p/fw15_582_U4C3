const express = require('express');
const app = express();
const {body,validationResult} = require('express-validator');
const uploads = require('./upload');
const {register} = require('./controllers/user.controller');

app.post('/register',
   
    uploads.array('profilePic'),
    register
);




module.exports = app;