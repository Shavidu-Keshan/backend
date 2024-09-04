const { response } = require('./app');
const User = require('./Model');

const getUsers = (req,res,next) =>{
    User.find()
    .then(response =>{
        res.json({response})
    })
    .catch( error => {
        res.json({error})
    });
    
};

const addUser = (req,res,next) => {
    const user= new User ({
        id : req.body.id,
        name : req.body.name,
    });
    user.save()
        .then(response =>{
            res.json({response})
        })
        .catch( error => {
            res.json({error})
        });
};

const updateUser = (req,res,next) => {
    const {id,name} = req.body;
    User.updateOne({ id: id }, { $set: { name: name } })
    .then(response =>{
        res.json({response})
    })
    .catch( error => {
        res.json({error})
    });
}

const deleteUser = (req,res,next) => {
    const id  = req.body.id;
    User.deleteOne ({id : id})
    .then(response =>{
        res.json({response})
    })
    .catch( error => {
        res.json({error})
    });
    
};const getUserById = (id, callback) => {
    User.findById(id, (err, user) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, user);
    });
};


 //EXPORT CONTROLL FUNCTION
 exports.getUsers =getUsers;
 exports.addUser = addUser;
 exports.updateUser = updateUser;
 exports.deleteUser = deleteUser;
