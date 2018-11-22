 // ES6
 //  let + const
// let "replaces" var. let creates scope within {}
var gameAccess = false;

if (player === 'bobby') {
	var gameAccess = true;
}
gameAccess;  //true

// BUT with let
let gameAccess = false;

if (player === 'bobby') {
	let gameAccess = true;
}
gameAccess;  //false

// const creates a variable that can not be updated = it becomes a constant
const player = 'bobby';
// if you use const to create an object, you can not reassign the objects value, but you can reasign objects key:value pairs.


// DESTRUCTURING - breaks down a data structure(properties of an array or object) into simpler parts (variables)
const obj = {
	player: 'bobby';
	experience: 100;
	gameAccess: true;
}
// instead of this
const player = obj.player;
let experience = obj.experience;
let gameAccess = obj.gameAccess;
// you can do this
const { player } = obj;
let { experience, gameAccess, class = 'mage' } = obj;  //we've also assigned new key:value pair, which didnt exist in the original object

// or you can assign variable to the objects key
let robotA = { name: "Bender" };
let robotB = { name: "Flexo" };

let { name: nameA } = robotA;
let { name: nameB } = robotB;

console.log(nameA);   // "Bender"
console.log(nameB);   // "Flexo"

// or with arrays
let someArray = [111, 62, 37, 584];
let [first, second, third] = someArray;
// you can skip over items in array from being destructured
let [,,,forth] = someArray;  // forth = 584

// Rest items
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Assign the first and third items to red and yellow
// Assign the remaining items to otherColors variable using the spread operator(...)
const [red,, yellow, ...otherColors] = rainbow;
//  otherColors variable is reffered to as rest items variable.
console.log(otherColors); // ['green', 'blue', 'indigo', 'violet']


// TEMPLATE STRINGS - defined by backquotes ``
let greeting = `...`
// you can concat variables into strings easily with ${} syntax
const name = 'Paul';
const age = 30;
const pet = 'dog';

let greeting = `Hi my name is ${name}, I am ${age} years old and I have a pet ${pet}.`
greetingl; // 'Hi my name is Paul, I am 30 years old and I have a pet dog.'


// DEFAULT ARGUMENTS - checks weather you specify and argument and if not uses the default argument.
function greet (name='', age = 25, pet='fish') {
	return `Hi my name is ${name}, I am ${age} years old and I have a pet ${pet}.`
}
greet(); // 'Hi my name is , I am 25 years old and I have a pet fish.'
greet('Frank', 57, 'horse');  // 'Hi my name is Frank, I am 57 years old and I have a pet horse.'


// ARROW FUNCTIONS
// instead of this
function add(a, b) {
	return a + b;
}
// with the new ES6 syntax you can use this
const add = (a, b) => {return a + b};
//  or in this case if you have a signle return, you can use this
const add = (a, b) => a + b;
