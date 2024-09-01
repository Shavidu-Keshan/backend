const users = [
    {
        id: 1,
        name : "prasad"
    },
    {
        id: 2,
        name: "prasadi"
    }
];

const getUsers = (cb) => {
    cb(users);
}


const getUserById = (id,cb) => {
    const user = users.find(user => user.id == id);
    cb(user);

}
 //EXPORT CONTROLL FUNCTION
 exports.getUsers =getUsers;
 exports.getUserById = getUserById;
