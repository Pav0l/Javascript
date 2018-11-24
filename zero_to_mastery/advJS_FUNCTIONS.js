// FUNCTIONS

// CLOSURES - the child scope always remembers(has access to) the scope of a parent scope }parents variables AND parameters)
const showName = (firstName, lastName) => { 
	const nameIntro = "My name is ";
    // this inner function has access to the outer function's variables, including the parameter
	const makeFullName = () => {         
		return `${nameIntro} ${firstName} ${lastName}`;
	}
	return makeFullName(); 
} 
showName ("James", "Bond"); // My name is James Bond

// Closures have access to the outer function’s variable even after the outer function returns:
const celebrityName = (firstName) => {
   const nameIntro = "This celebrity is ";
   const lastName = (theLastName) => {
        return `${nameIntro} ${firstName} ${theLastName}`;
    }
    return lastName;
}
const mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.

// The closure (lastName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
mjName ("Jackson"); // This celebrity is Michael Jackson 


// Closures store references to the outer function’s variables; they do not store the actual value.  
function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable
            // It will return the current value of celebrityID, even after the changeTheID function changes it
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime
            celebrityID = theNewID;
        }
    }

}

var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.
mjID.getID(); // 999
mjID.setID(567); // Changes the outer function's variable
mjID.getID(); // 567: It returns the updated celebrityId variable 


// CURRYING - a process of converting a function that takes multiple arguments into a function that takes them one at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);

// With currying you can do something like this
const multiplyByThree = curriedMultiply(3);
multiplyByThree(6);		//18


// COMPOSE - the act of putting two fucntions together to form a thrid function, where the output of one function is the imput of the other.

const conmpose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

// arguments sum are both f, g parameters. value 5 is parameter a
compose(sum, sum)(5);
// first the g(a) function is run. g = sum, a = num =5
//  sum(5) = 5 + 1;  // 6
// then function f(6) is run. f = sum, num = 6
//  sum(6) = 6 + 1;  //7

// other example
const add = (a, b) => a + b;
const mult = (a, b) => a * b;
add(2, mult(3, 5));  // 17
