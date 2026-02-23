const { use } = require("react");

/*
User Object Modifier

Given:

const user = {
    name: "Esraa",
    age: 25
}

Write a function that:
Adds isAdmin: false
Updates age
Returns new object (without mutating original)
*/
const user = {
    name: "Esraa",
    age: 25,
    newAge: function(){
        this.age++
    },
};

function modifyUser(user, newAge){
    return {
        ...user,
        age: newAge,
        isAdmin: false
    }
}

const updateUser = modifyUser(user, 30);

console.log(user);
console.log(updateUser);
