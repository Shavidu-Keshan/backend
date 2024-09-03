const { response } = require('./app');
const User = require('./Model')

const getUsers = (req,res,nwxt) =>{
    User.find()
    .then(response =>{
        res.json({resonse})
    })
    .catch( error => {
        res.json({error : error})
    });
    
};

const addUser = (req,res,next) => {
    const user= new User ({
        id : req.body.id,
        name : req.body.name,
    })
}

 //EXPORT CONTROLL FUNCTION
 exports.getUsers =getUsers;
 exports.getUserById = getUserById;
