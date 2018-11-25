// OBJECTS

// Reference type
const object1 = { value: 10 };
const object2 = object1
const object3 = { value: 10 };

object1 === object2;  //true
object1 === object3;  //false


// Context - tells you where you are within the object
// It refers to the object to which a function belongs. 
// When you use “this” keyword, it refers to the object to which function belongs.



// Instantiation
class Player {
	constructor (name, type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi, I am ${this.name} and I'm a ${this.type}`);
	}
}

class Wizzard extends Player {
	constructor(name, type) {
		super(name, type)
	}
	play() {
		console.log(`Weee...I'm playing ${this.type}`);
	}
}

const wizzard1 = new Wizzard('John', 'Healer');
const wizzard2 = new Wizzard('Becky', 'Mage');