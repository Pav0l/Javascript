// ARRAYS

const array = [1, 2, 50, 16];

// forEach - takes a callback as its only argument, and iterates over every item in the array and calls the callback on it. T
// he callback can take two arguments, the first is the item itself, the second is the index of the item, this argument is optional.
const double = [];
const newArray = array.forEach((num) => {
	console.log(num*2);
})
// 2
// 4
// 100
// 32


// .map is used when we want to change every item in an array in the same way. .map takes a callback as its only argument.
// .map will return the entire new array
const mapArray = array.map((num) => {
// (num) => { return num * 2}; is a callback function (argument of .map method) 
// .map always needs a return
	return num * 2;
});
console.log(mapArray);


// .filter is used when you want to filter an array with a conditions
const filterArray = array.filter(num => {
	// .filter always needs a return
	return num > 5;
})
console.log(filterArray);


// .reduce - The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).


const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
// the second parameter in reduce (in our case the zero) specifies where should the acccumulator start
}, 0);

console.log(reduceArray);  //69   ...because 0 + 1 + 2 + 50 + 16 = 69

// Get the total score of force users only.
const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const totalJediScore = personnel.reduce((acc, person) => {
	// Ternary operator checks if the user isForceUser (insted of .filter method), if true count scores (instead of .map method)
	// and add them to the accumulator. If not, return acc. Do this for every item in personnel array.
  return person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc;
}, 0);

totalJediScore;  //420

