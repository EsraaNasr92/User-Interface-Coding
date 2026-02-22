/*
Function takes: "light" or "dark"

Returns style object:
{
    backgroundColor: "...",
    color: "..."
}

This connects directly to React dynamic styling.
*/

let theme;

function themeSwitcher(theme){
    const darkObject = {
        backgroundColor: "dark gray",
        color: "White"
    };

    const lightObject = {
        backgroundColor: "White",
        color: "dark gray"
    };

    return theme === "dark" ?  darkObject: lightObject ;
}

console.log(themeSwitcher("dark"));

/* Another way */
function themeSwitcher(value){
    const result = {};

    if(value === "dark"){
        result.backgroundColor = "Black";
        result.color = "white";
    }else{
        result.backgroundColor = "White";
        result.color = "Black";
    }
    return result;
}

console.log(themeSwitcher("light"));