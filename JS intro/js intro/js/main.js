alert('Hello World, from the JS file')

// This is a comment

/*
This is 
a multiline comment
*/


//JS Datatypes
//Primitive variables

console.log('############## JS datatypes ##############');
console.log(typeof(42))                 //number
console.log(typeof(4.2))                //number
console.log(typeof(0))                  //number

console.log(typeof('Hello World'));     //string
console.log(typeof('Hello World'));     //string
console.log(typeof(""));                //string

console.log(typeof(true));               //boolean
console.log(typeof(false));              //boolean

console.log(typeof(null));               //object.  when a variable is declared and is assigned an "empty" value
console.log(typeof(undefined));          //undefined.  when a variable is declared BUT is not assigned 

// Non-primitive variables
//Will cover arrays amd objects later in the course
console.log(typeof([1, 2, 3, 'four', 'five', true, false, ['nested arrays'] ]));    //Array object
console.log(typeof({firstname: 'John',  age: 33}))                                  //Array object



/**
 * What is a variable?
 * It's a container that holds a value
 * 
 * Can be declared with the keywords 'var', 'let' and 'const'
 * The differences between the variable declaration will be explained further, later in the course
 * 
 */

console.log('############## Variables ##############')
var numb1 = 1;
var numb1 = 1;         // Allowed to re-declare a spesificvariable with var
console.log(numb1);


let numb2 = 2;
// let numb2 = 5;      // NOT Allowed to re-declare a spesificvariable with var
console.log(numb2);


const numb3 = 3.12159;
// numb3 = 3;          // not allowed to re-declare Or re-assign a 'const' variable

let text1= 'Jag har 5 decimaler på PI';
let text2 = 'Svaret om allt i universe';


console.log('################# Logical operators ##################')
let addition       = numb1 + numb2;
let subtraction    = numb1 - numb2;
let division       = numb1 / numb2;
let multiplication = numb1 * numb2;

console.log(addition);
console.log(subtraction);
console.log(division);
console.log(multiplication);

// = assignment operator
// == equal value
// === equal value and datatype

// += add on current value
// -= subtract on currents value
// /= divide on current value
// *= multiply on current value
console.log('############## Logical operations with assignment operator ###############')
let x = 5;
x += 6;   //11
console.log(x);
x -= 1;   //11
console.log(x);
x /= 2;   //5
console.log(x);
x *= 10;   //50
console.log(x);



console.log('################ Concatenate strings with + ###############');
let string = "Hello" + "World" + "Wide" + "Web";
console.log(string);

console.log('################## Concatenate string with += ###############');
string = "Hello";
console.log(string);
string += "World";
console.log(string);
string += "Wide";
console.log(string);
string += "Web";
console.log(string);

console.log('################## Concatenate string with "+" VS string literals ###############');
let word1 = "Hello";
let word2 = "World";
let word3 = "Wide";
let word4 = "Web";
// Concatenating with "+" can make things a bit awkward sometimes.
string =  word1 + " " + word2 + " " + word3 + " " + word4;
console.log(string);
// Concatenating with string literals is much easier then the above aproach 
string = `${word1} ${word2} ${word3} ${word4}`;
console.log(string);

console.log('################### Concatenate string and numbers with "+" ################### ')
console.log(3 + 2);           //5
console.log('3' + '2');       //32
console.log('3' + 2);         //32
console.log(3 + 2 + '1' + 1); //511


console.log('################### Alert(), popup(), if-statement ################### ')

// built-in JS functions
// prompt() is a popup that asks the user for a datainput
// alert() is a popup for displaying information/message to the user

let userName = prompt('Agne namn')
console.log(userName);

if (userName == 'john'){
    //if the condition is true, then the code inside this block will execute 
    alert('Welcome John')
}
