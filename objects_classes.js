// JAVASCRIPT OBJECTS & CLASSES

// OBJECT PROPERTIES:
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
		return this.age - 18;
	}
}

const propertyDescriptor = Object.getOwnPropertyDescriptor(myObject, 'name');
console.log(propertyDescriptor.value); // John
console.log(propertyDescriptor.writable); // true
console.log(propertyDescriptor.get); // undefined - if you call property 'yearsCoding', returns function
console.log(propertyDescriptor.set); // undefined
console.log(propertyDescriptor.configurable); // true
console.log(propertyDescriptor.enumerable); // true

// These flags can be changed with Object.defineProperty(object, property, descriptor)
// This method defines a new property on an object or modifies an existing one.

Object.defineProperty(myObject, 'name', {
	writable: false;
});

myObject.name = 'Peter';
console.log(myObject.name); // "John"



// PROPERTY getters AND setters
// Functions that work on getting and setting a value

let user = {
	name: 'Jacob',
	surname: 'King',

	get fullName() {
		return `${this.name} ${this.surname}`;
	}
}

console.log(user.fullName); // Jacob King

// If you want to set the user.fullname from the outside, it wont work
user.fullname = 'Danny Chewbaca';
//  You can fix it with setter
let user = {
	name: 'Jacob',
	surname: 'King',

	get fullName() {
		return `${this.name} ${this.surname}`;
	},

	set fullName(input) {
		[this.name, this.surname] = input.split(' ');
	}
}
user.fullName = 'Danny Chewbaca';
console.log(user.name); //Danny
console.log(user.surname); //Chewbaca

// You can use setter for example to check for password lenght
let user = {
	get password() {
		return this._password;
	},

	set password(input) {
		if (input.length < 3) {
			console.log('Password is too short. Use at least 3 characters!')
		}
		this._password = input;
	}
}

user.password = 'abcd';
console.log(user.password);
user.password = 'a';  //Password is too short. Use at least 3 characters!



// PROTOTYPAL INHERITANCE
// If you want to take a object/class and extend it.
// For instance, if you havea user object with its properties and methods and want to make adming and guest as modified variants of it.
// Prototypal inheritance is a feature that helps with that. One of the ways of setting inheritance is __proto__

let car = {
	fuel: "diesel",
}

let volvo = {
	isSwedish: true,
}

volvo.__proto__ = car;  //We set car to be a prototype of volvo.

console.log(volvo.fuel); // diesel ...console.log tries to read property volvo.fuel, but its not in volvo, so JS follows the prototype reference and finds it in car
console.log(volvo.isSwedish);  // true
// The same works with methods

let car = {
	fuel: 'diesel',
	autoPark() {
		alert("Auto-parking mode enabled!")
	},
}

let volvo = {
	isSwedish: true,
	__proto__: car,
}

volvo.autoPark();  // Auto-parking mode enabled!

// Prototype chain can be as long as we need it to be, however it can go in circles. JS wil throw an error if we assign __proto__ in circle.

let volvoS60 = {
	tyoe: "S60",
	__proto__: volvo,
}

volvoS60.autoPark(); // Auto-parking mode enabled!

// If we assign a value to a property directly, it will immediately execute it, without using the prototype.

volvoS60.fuel = 'gasoline';
console.log(volvoS60.fuel);

// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.



