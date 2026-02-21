/*
Full Name Formatter
Create a function that:
Takes firstName and lastName
Returns them capitalized 
*/
function formatName(firstName, lastName){
    const formattedFirstName = firstName.charAt(0).toUpperCase() +
    firstName.slice(1).toLowerCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() +
    lastName.slice(1).toLowerCase();
    return formattedFirstName + " " + formattedLastName;
}

console.log(formatName("esraa", "nasr"));