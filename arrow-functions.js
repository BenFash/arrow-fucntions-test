/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     //code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum); 

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(5, 5);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething("hello world");

const sayHello = ()  => console.log("hello")
sayHello();

// Returning Multiple Lines

const returnMultiLine = () => (
    `<p>
    this is multi line string set and a p element
    </p>`
)
console.log(returnMultiLine());

