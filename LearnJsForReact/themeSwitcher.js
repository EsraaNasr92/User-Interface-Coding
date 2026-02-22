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