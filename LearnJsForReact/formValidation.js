/*
Function takes:

{
    email: "",
    password: ""
}

Return object of errors:

{
    email: "Invalid email",
    password: "Too short"
}

Very important for real frontend work.
*/
let email;
let password;

function formValidation({ email, password }){
    const errors = {};

    if(!email){
        errors.email = "Email is Required";
    }else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email = "Invalid Email";
    }

    if(!password){
        errors.password = "Password is Required";
    }else if(password.length < 6){
        errors.password = "Too short";
    }

    return errors;
}


console.log(
    formValidation({
        email: "esragamil.com",
        password: "159"
    })
);