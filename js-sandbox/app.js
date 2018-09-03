// Lecture 1
//alert("Hello World!");

// Lecture 2
// Logging on the console
// console.log("Hello World!");
// console.log(1223);
// console.log(true);
// var greeting = "hello";

// console.log(greeting);

// var array = [1,2,45];
// console.log(array);

// var object = {a:"1",b:"2"}
// console.log(object);

// console.table(object);

// console.error("Got some error over here!");

// console.clear();

// console.warn("This is a warning");

// console.time("Hello");
// console.log("Dummy");
// console.log("Dummy1");
// console.log("Dummy2");
// console.log("Dummy3");
// console.log("Dummy4");
// console.timeEnd("Hello");

// Lecture 3
// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// Init Var without giving the value
// var greeting;
// console.log(greeting);
// greeting = "hello";
// console.log(greeting);

// Variable name can have letters, numbers, _, $
// Name cannot start with a number

// Multi Word Variable 
// Camel Case
// var firstName = 'John';

// let is similar to var
// let name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// const
// const name = "John Doe";
// console.log(name);
// We cannot reassign the name
// name = "Steve Smith";
// console.log(name);
// We cannot just init const variable
// const greeting;
// Similar to val in Scala
// Even though we can change the values in the object and array as primitively they are mutable
// const person = {
//     name: 'Sara',
//     age: 30
// }
// console.log(person);
// person.name = "Vaz";
// person.age = 32;
// console.log(person);

// const numbers = [1,2,3];
// console.log(numbers);

// numbers.push(6);
// console.log(numbers);
// We cannot reassign the value
// numbers = [3,4];

// Lecture 4

// // Primitive Type - Stored into Memory
// // String
// const name = "John";
// console.log(typeof name);

// // Number
// const age = 43;
// console.log(typeof age);

// // Boolean
// const hasKids = true;
// console.log(typeof hasKids);

// // null
// const car = null;
// console.log(typeof car);

// // JS has bug typeof null is object
// // null is often used to signify an empty reference to an object
// // In fact, the ECMAScript specification defines 
// // null as the primitive value that represents the intentional absence of any object value 
// let test;
// console.log(typeof test);

// const sym = Symbol();
// console.log(typeof sym);

// // Reference Type - Reference are stored in heap
// // Array
// const numbers = [1,2];
// console.log(typeof numbers);
// // Object Literal
// const person = {name:"Aj", age: 23};
// console.log(typeof person);

// const today = new Date();
// console.log(typeof today)

// Lecture 5
// Type Conversion
// let val;

// // val = 5;
// // Type Conversion
// // Number to String
// val = String(555);
// val = String(4 + 4);

// // Boolean to String
// val = String(true);
// val = String(new Date());
// val = String([1,2,3]);

// // toString
// val = (5).toString();
// val = (true).toString;

// // Output
// console.log(val);
// console.log(typeof val);
//.length works only on String
// console.log(val.length);

// String to Number
// val = 5;
// val = Number('5');
// val = Number(true); // 1
// val = Number(false); // 0
// val = Number(null); // 0

// val = Number('hello'); // NaN - Not a number
// val = Number(undefined); // NaN - Not a number
// val = parseInt('100');
// val = parseInt('100.30');
// val = parseFloat('100.301');


// // Output
// console.log(val);
// console.log(typeof val);
// // toFixed works only on the number
// console.log(val.toFixed());


// Type Cohersion
// const val1 = 5;
// const val2 = 6;
// const sum = val1 + val2; // 11

// const val1 = 5;
// const val2 = '6';
// const sum = val1 + val2; // 56 - It made val1 as String 

// console.log(sum);
// console.log(typeof sum);


// Lecture 6
// Number and Math Object
// const num1 = 100;
// const num2 = 50;

// let val;

// // Simple Math
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 % num2;

// // Math Object
// // Math is an object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.round(2.4);

// val = Math.floor(2.8);
// val = Math.floor(2.3);

// val = Math.ceil(2.8);
// val = Math.ceil(2.3);
// val = Math.abs(-2.3);
// val = Math.pow(8,2);
// val = Math.min(2,34,344,23);
// val = Math.max(2,34,344,23);
// val = Math.random();
// val = Math.floor(Math.random() * 20 + 1);


// console.log(val);


// Lecture 7
// String Methods and Concatenation

// const firstName = 'Ajay';
// const lastName = 'Gupta';

// let val;

// // Concatenation
// val = firstName + ' ' + lastName;
// val = 'Red';
// val += 'Bull';

// // We can perform literals in ES 2015
// val = 'My name is ' + firstName + ' ' + lastName;

// // Escaping
// val = 'That\'s cool';

// // Length
// val = "Cool".length;

// // Concat
// val = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toUpperCase();
// val = lastName.toLowerCase();

// // Accessing elements at a position
// val = firstName[0];

// // Finding the index of any element in String
// val = firstName.toLowerCase().indexOf('a');
// val = firstName.toLowerCase().lastIndexOf('a');

// // Getting the character at a specified position
// val = firstName.charAt(2);

// // Last Character of String
// val = firstName.charAt(firstName.length - 1);

// // Get SubString
// val = firstName.substring(0,2);
// // Same as substring
// val = firstName.slice(0,2);

// // Get Last Three Character
// val = firstName.toLowerCase().slice(-3);
// // We can use this for getting last character from string
// val = firstName.slice(-1);

// // Split
// const greeting = "Hello my name is Ajay Gupta";
// val = greeting.split(' ');

// // Replace
// val = greeting.replace('Ajay', 'RedBull');

// // Includes // Contains
// val = greeting.includes('Hello');

// console.log(val);

// Lecture 8
// Template Literals
// Part of ES6, but it is compatible for all modern browser

// const name = 'Ajay';
// const age = 28;
// const job = 'Developer';

// let html;

// // Without Template String(es5)
// html = '<ul> <li>Name : ' + name + ' </li><li>Age : ' + age + '</li><li>Job : ' + job + '</li></ul>';
// html = '<ul>' + 
//         '<li>Name : ' + name + '</li>' + 
//         '<li>Age : ' + age + '</li>' + 
//         '<li>Job : ' + job + '</li>' + 
//         '</ul>';


// function hello(){
//     return "Hello";
// }

// // With Template Strings (es6)
// html = `
//       <ul>
//         <li>Name : ${name}</li>
//         <li>Age : ${age}</li>
//         <li>Job : ${job}</li>
//         <li> ${2 + 2}</li>
//         <li> ${hello()}</li>
//         <li> ${age<30?'Under 30':'Above 30'}</li>
//       </ul>
// `;

// // Cool!!
// document.body.innerHTML = html;

// Lecture 9
// Array and Methods

// Create some array
// let val;
// let result;

// val = [23, 45, 12];
// val = new Array(23, 45, 12);

// val = new Array("Banana","Apple");
// console.log(val);

// // We can have another array variable in array
// let mix = ["Banana",1, true, val];
// console.log(mix);

// Methods
// val = [11,23,112,111,34];

// result = val.length
// result = Array.isArray(val);
// result = val[0];

// // Update an element in an array
// val[2] = 10;

// // Index Of
// result = val.indexOf(1); // -1 if not found
// result = val.indexOf(23);

// // Mutating arrays
// // Add on to end
// val.push(250);

// // Add on to front
// val.unshift(120); // cool!!

// // Take off from end
// val.pop();

// // Take off from front
// val.shift();

// // Splice values
// val.splice(2,1);

// // Reverse
// val.reverse();

// // Concatenate arrays
// result = val.concat([12,11,2222]);

// Sort
// Will not work as expected but instead it sorts the number using the first letter
// val.sort(); // [11, 111, 112, 23, 34]

// // To achieve proper sort we need to use compare functions
// val.sort(function(x,y){
//     return x - y; 
// })

// // reverse sort
// val.sort(function(x,y){
//     return y - x; 
// })

// // Find
// function over50(num){
//     return num > 50;
// }
// result = val.find(over50);

// console.log(val);
// console.log(result);

// Lecture 10
// Object

// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 25,
//     email: 'steve@aol.com',
//     hobbies: ['Cricket','Football'],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     age: 30,
//     getBirthYear: function(){
//         // return 1987;
//         // to access object element from the function directly
//         return 2017 - this.age;
//     }
// };

// let val;
// val = person;
// val = person.firstName; // Recommended
// val = person['firstName'];
// val = person.age;
// val = person.hobbies[0];
// val = person.address.city;
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name:'Ajay' , age: 30},
//     {name:'RedBull' , age: 10}
// ];

// for(let i =0; i<people.length; i++){
//     console.log(people[i].name);
// };

// Lecture 11
// Working with Date and Time

// let val;
// const today = new Date();
// let birthday = new Date('10-09-1981');
// birthday = new Date('1981-10-09');
// birthday = new Date('10/09/1981');
// birthday = new Date('October 9 1981');
// // Reference link - Mozilla
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// val = birthday;
// val = today.getMonth(); // 0 Indexed
// val = today.getDay(); // 0 Sunday
// val = today.getDate(); // 1 Indexed
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime(); // Epoch Time Stamp

// birthday.setMonth(2);
// val = birthday; // Keeps reference of it. If we change the birthday even after assingment it will update the date
// birthday.setDate(13);

// console.log(val);
// console.log(typeof val);

// Lecture 12
// Conditionals - If Else and Comparision Operator

// if(){
// }else{
// }

// let id = '100';
// Equal To
// Equal to will match '100' == 100
// if(id == 100){
//     console.log('Correct Equal');
// }else{
//     console.log('Incorrect Equal');
// }

// // Deep Equal To
// if(id === 100){
//     console.log('Correct DeepEqual');
// }else{
//     console.log('Incorrect DeepEqual');
// }

// // Not Equal To
// if(id != 100){
//     console.log('Correct NotEqual');
// }else{
//     console.log('Incorrect NotEqual');
// }

// // Deep Not Equal To
// // Not Equal To
// if(id !== 100){
//     console.log('Correct NotEqual');
// }else{
//     console.log('Incorrect NotEqual');
// }


// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// }else{
//     console.log('Not Defined');
// }

// const color = 'black';
// if(color === 'yellow'){
//     console.log('Color is yellow');
// }else if(color === 'red'){
//     console.log('Color is red');
// }else{
//     console.log('Color is not red nor yellow');
// }

// // Logical Operator
// const name = 'Ajay';
// const age = 27;

// let val = name === 'Ajay' && age>20
// console.log(val);
// // Or Operator !!
// // Ternary Operator ?:


// Lecture 13
// Switch Statement
// const color = 'blue';
// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log(`Color not found ! ${color}`);
//         break;
// }


// Lectur 14
// Functions

// Function Declarations
// function greet(firstName, lastName){
//     // console.log('Hello');
//     // to set default values in ES5
//     if(typeof firstName === 'undefined'){firstName = 'John'}
//     if(typeof lastName === 'undefined'){lastName = 'Abraham'}

//     return `Hello ${firstName} ${lastName}`;
// }

// // to set default values in ES6
// function greet(firstName = 'John', lastName= 'Abraham'){
//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet('John','Abraham'));
// console.log(greet()); // Hello undefined undefined if we do not have default value set in the function
// console.log(greet('Steve','Smith'));


// Function Expressions - Useful in Closures
// const square = function(x){
//     return x * x;
// }

// console.log(square(4));


// Immediately Invokable Function Expressions -- IIFEs

// (function(){
//     console.log('IIFE Ran...');
// })();
// Used in module design pattern
// (function(name){
//     console.log(`IIFE Ran...${name}`);
// })('Smith');


// Property Methods
// const todo = {
//     add: function(){
//         console.log('Add Todo...');
//     },
//     edit: function(){
//         console.log('Edit Todo...');
//     },
//     delete: function(){
//         console.log('Delete Todo...');
//     }
// }

// todo.add();
// todo.edit();
// todo.delete();


// Lecture 15
// Loops and Iterations
// Loops - for, while and do while
// Iterations - foreach and map

// for
// for(let i=0; i < 10; i++){
//     console.log('Current value of i: ' + i);
// }
// break out and skip some loop
// for(let i=0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my favorite number');
//         // Will move to next iteration from here
//         continue;
//     };

//     if(i === 7){
//         console.log('Stopping the loop at ' + i);
//         break;
//     }
//     console.log('Current value of i: ' + i);
// }

// let i = 0;

// while(i<10){
//     console.log('Current value of i: ' + i);
//     i++;
// }

// let i = 0;
// do{
//     console.log('Current value of i :' + i);
//     i++;
// }while(i<10)


// const cars = ['Chevy','Honda','Mercedes'];
// for(let i = 0; i<cars.length; i++){
//     console.log('Car: '+ cars[i]);
// }

// foreach - cleaner than for loop
// cars.forEach(function(car){
//     console.log('Car: ' + car);
// });
// index and array are special parameters in forEach function method, we can send any name of the second and third parameter
// cars.forEach(function(car, index, array){
//     console.log(`Car: ${index} ${car}`);
//     console.log(array);
// });



// const carNameLengths = cars.map(function(car){
//     return car.length;
// })
// console.log(carNameLengths);
// carNameLengths.forEach(function(carNameLength){
//     console.log(carNameLength);
// })

// Lecture 16
// DOM - Window Object

// NodeJS - JS Runtime Environment
// NodeJS and Chrome use same JS Engine V8

// Go to console and type window - we can get lot more information about the window
// Window Methods / Objects / Properties

// window.console.log('Hello World'); - same as console.log

// alert
// window.alert('Hello'); or alert('Hello')

// prompt
// const input = prompt('Hello');
// alert(input);

// confirm
// if(confirm('Are you sure?')){
//     console.log('Y');
// }else{
//     console.log('N');
// }

// let val;
// val = outerHeight;
// val = outerWidth;
// val = innerHeight;
// val = innerWidth;
// // Useful when we are doing scrolling animation, based upon the scroll position change the image
// val = scrollY;
// val = scrollX;
// val = window.location.hostname;

// // val = window.location.search;

// // window.location.href = "http://google.com/";
// // window.location.reload;

// // History Object
// // window.history.go(-2);
// // val = window.history;

// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;


// console.log(val);


// Lecture 17
// Scope

// Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// function test(){
//     var a = 4; // new variables are created so it does not impact global scope
//     let b = 5;
//     const c = 6;
//     console.log('Function scope', a, b, c);
// }

// test();

// block scope
// if(true){
//     var a = 4; // Global Scope a is changed to 4
//     let b = 5; // Global Scope variable remains same
//     const c = 6; // Global Scope variable remains same
//     console.log('Function scope', a, b, c);

// }

// For loop variable if it is let it is not impacting global scope variables
// But if it is var it will impact global scope
// for(var a = 0; a<10; a++){
//     console.log(`Value of a ${a}`);
// }

// console.log('Global Scope', a, b, c);

