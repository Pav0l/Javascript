// JAVASCRIPT OBJECTS & CLASSES

// Object properties:
// 	'key': value - standard property of an object
// 	writable - if true, can be changed
// get - a function which serves as a getter for the property
// set - a function which serves as a setter for the propert
// 	enumerable - if true, can be looped through
// 	configurable - if true, can be deleted and modified

// We can see these properties with this method:
// Object.getOwnPropertyDescriptor(object, property) 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor

let myObject = {
	name: 'John',
	age: 30,
	lovesJavascript : true,
	get yearsCoding() {
		return 5;
	}
}

const propertyDescriptor = Object.getOwnPropertyDescriptor(myObject, 'name');
console.log(propertyDescriptor.value);
console.log(propertyDescriptor.writable);
console.log(propertyDescriptor.get);
console.log(propertyDescriptor.set);
console.log(propertyDescriptor.configurable);
console.log(propertyDescriptor.enumerable);

// John
// true
// undefined
// undefined
// true
// true

// These flags can be changed with Object.defineProperty(object, property, descriptor)
// This method defines a new property on an object or modifies an existing one.

Object.defineProperty(myObject, 'name', {
	writable: false;
});

myObject.name = 'Peter';
console.log(myObject.name);

// returns "John"