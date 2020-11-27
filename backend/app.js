const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/user');

const userRoute = require('./routes/user');
const messageRoute = require('./routes/message');

const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use(bodyParser.json());

app.use('/api/auth', userRoute);
app.use('/api', messageRoute);


module.exports = app;