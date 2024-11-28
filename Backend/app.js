const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

  app.get('/', (req, res)=>{
    res.send('Hello, World! from app.js');
  })

  module.exports =app;