/*
Function that: Takes isLoggedIn and isAdmin

Returns:
"Redirect to login"
"Access denied"
"Welcome Admin"

This is React routing logic thinking.
*/

const isLoggedIn = false;
const isAdmin = false;

function loginAccess(isLoggedIn, isAdmin) {
    return !isLoggedIn
        ? "Redirect to login"
        : !isAdmin
        ? "Access denied"
        : "Welcome Admin";
}

console.log(loginAccess(true, true));