/*
Age Access System
Return:
"Child" if age < 12
"Teen" if 12–17
"Adult" if 18+ */

let age;

function testAge(age){
    if(age < 12){
        return "Child";
    }else if(age >= 12 && age < 18){
        return "Teen";
    }else{
        return "Adult";
    }
}

console.log(testAge(30));


/* Ternary Operator */

function testAge(age){
    return age < 12 ?
    "child"
    : age < 18 ?
    "Teen"
    : "Adult";
}
console.log(testAge(30));