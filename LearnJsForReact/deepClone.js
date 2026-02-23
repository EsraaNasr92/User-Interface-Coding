/*
Deep Clone Function

Write a function that deeply clones an object
*/

const user = {
    name: "Esraa",
    age: 33,
    hobbies: ["reading", "drawing", "needlework"]
}

// spread syntax
const copied = { ...user }

console.log(user);
console.log(copied);


// Using JSON
const copiedJson = JSON.parse(JSON.stringify(user));

console.log(user);
console.log(copiedJson);


// structured clone
const copiedStructure = structuredClone(user);

console.log(user);
console.log(copiedStructure);