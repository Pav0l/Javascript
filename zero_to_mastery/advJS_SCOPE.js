// SCOPE
// Scope = what variables do I have access to when a code is running.

// Root scope (window)
let a = 'Windows scope';

function abc () {
	// child scope
	let b = "b is inside functions scope";
	console.log(a);
}
// Functions can access variables in the outter scope.
abc();  // 'Windows scope'

let name = 'Paul';

function printName () {
	// We overwrite the name variable inside the scope with new value.
	let name = 'John';
	console.log('printName ', name);
}

function setName () {
	// We set the name variable outside the functions scope with new value.
	name = 'Peter';
	console.log('setName ',name);
}

console.log(name);  //Paul
printName(); // printName John
setName();  // setName Peter
// Now if we call the name variable again, it will keep the value set by setName() function
console.log(name);  //Peter

