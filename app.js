 const express = require('express');
 const app = express();
 const cors = require('cors');
 const controller = require('./controller');

 app.use(cors());
 app.use(
    express.urlencoded({
        extended: true,

    })
 );
 app.use(express.json());
 app.get('/users', (req,res) => {
    controller.getUsers(users => {
        res.send(users);
    })
 })

 module.exports = app;
   