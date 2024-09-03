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

 //get users data
 app.get('/users', (req,res) => {
    controller.getUsers((req,res,next) => {
        res.send(users);
    })
 });
//create user
 app.post('/createuser', (req,res) => {
    controller.addUser(req.body,(callback) =>{
        res.send();
    })
 })

 //update user

 app.put('/updateuser', (req,res) => {
    controller.updateUser(req.body,(callback) =>{
        res.send(callback);
    })
 })

 //delete
 app.delete('/deleteuser', (req,res) => {
    controller.deleteUserUser(req.body,(callback) =>{
        res.send();
    })
 })

 //get UserById data
 app.get('/user', (req,res) => {
    const id=req.query.id;
    controller.getUserById(id, user =>{
        res.send(user);
    } )

 })


 module.exports = app;
   