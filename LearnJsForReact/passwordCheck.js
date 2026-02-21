/*
Create a function that: Takes a password string
Returns:
"Weak" if less than 6 characters
"Medium" if contains numbers
"Strong" if contains numbers + special characters
*/
function checkPassword(password){
    if(password.lenght < 6){
        return "Weak";
    }
    const mediumPassword = /\d/.test(password);
    const strongPassword = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if(mediumPassword && strongPassword){
        return "Strong";
    }
    if(mediumPassword){
        return "Medium";
    }
    return "Weak";
}

console.log(checkPassword("absc"))

