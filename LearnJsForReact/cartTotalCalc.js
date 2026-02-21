/*
Cart Total Calculator Create a function that:

Takes an array of product objects

[
    { name: "Book", price: 100, quantity: 2 },
    { name: "Pen", price: 10, quantity: 5 }
]

Returns the total price
This is very common in React cart systems.
*/

const cartItem = [
    { name: "Book", price: 100, quantity: 2 },
    { name: "Pen", price: 10, quantity: 5 }
];
const totalPrice = cartItem.reduce((total, item) => {
    return total + item.price * item.quantity;
}, 0);
console.log(totalPrice);