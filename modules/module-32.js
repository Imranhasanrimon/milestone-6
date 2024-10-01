// let x = ['imran', 'hasan', 'rimon']
// let y = x;
// y[1] = 'ali'
// console.log(x, y);

// function myFunc(a, b) {
//     const total = a + b;
// }
// console.log(myFunc(3, 5));

//type coersion
// const a = 1;
// const b = true;
// console.log(b === a);

// const x = [];
// const y = x;
// console.log(x == y);

//scope------ hoisting
// if (true) {
//     console.log('inside if block');
//     const a = 0;
//     console.log(a);
// }

// scope()
// function scope() {
//     console.log('hoistionb');
// }

// myFunc()
// const myFunc = function () {
//     console.log('func expression');
// }

//---------Closure------
// function kitchen() {
//     let roast = 0;
//     return function () {
//         roast++;
//         return roast
//     }
// }
// const server = kitchen();
// console.log(server());
// console.log(server());
// console.log(server());
// console.log(server());
// const server2 = kitchen();
// console.log(server2());
// console.log(server2());
// console.log(server2());
// console.log(server());

//=====callback=======
// function greeting(mornignFunc, name) {
//     mornignFunc(name);
// }

// function mornignFunc(name) {
//     console.log('good morning', name);
// }

// function eveningFunc(name) {
//     console.log('good evenning', name);
// }
// greeting(mornignFunc, 'imran')
// greeting(mornignFunc, 'Rimon')
// greeting(eveningFunc, 'Hasan')

//=========Arguments=========
// function sum(a, b, c) {
//     const args = [...arguments];
//     console.log(args);
//     console.log(arguments);
//     const result = a + b + c;
//     console.log(sum.length);
//     return result
// }
// const total = sum(10, 20, 30, 40);
// console.log(total);
// console.log(sum.length);

//primitive types are passed by value
//non primitive types are passed by reference

// let a = 2;
// let b = 3;
// function multiply(a, b) {
//     a = 5
//     const result = a * b;
//     return result;
// }                              //this is primitive types

// const value = multiply(a, b);
// console.log(value);
// console.log(a);

// const team1 = { name: 'Imran', age: 23 }
// const team2 = { name: 'Najmul', age: 25 }

// function change(team1, team2) {
//     team1.name = 'Saad';
//     team2.name = 'Ab Rahman'
//     console.log(team1, team2);               //this is non primitive types
// }
// console.log(team1, team2);
// change(team1, team2)
// console.log(team1, team2);

// let p = 'Javascript';
// let q = p;
// p = 'React';
// console.log(q);

// const isTrue = true;
// console.log(!isTrue ? "hello" : "world")

// const sum = (p, q) => {
//     p + q;
// }
// const result = sum(2, 3);
// console.log(result);

// if ("2" === 2) {
//     console.log("Inside if");
// } else {
//     console.log("Inside else");
// }

// function work(x, y = 4) {
//     return x + y;
// }
// console.log(work(32));

// function change() {
//     let x = 10;
// };
// console.log(x);

// var z = 1;
// {
//     var z = 2;
// }
// console.log(z);

// function fkjlsa() {
//     var x = 5
// }
// console.log(x);

// let x = 5;
// if (true) {
//     let x = 10;
// }
// console.log(x);

// function test() {
//     let a = 10;
//     if (true) {
//         let a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }
// test();


// var sum = function () {
//     var num1 = 2;
//     var num2 = 3;

//     return function () {
//         num1 + num2;
//     }
// }
// console.dir(sum());

// //     solution 1
// const arr = [10, 20, 30, 40, 50];
// const total = arr.reduce((accumulator, cu) => accumulator + cu, 0);
// console.log(total);

// //     solution 2
// const arr2 = [1, 2, 3, 5];
// const product = arr2.reduce((accumulator, current) => accumulator * current, 1);
// console.log(product);

// //     solution 3
// const arr3 = [1, 2, 3, 22, 10, 3, 6, 9];
// const largestNum = arr3.find((element))

// //     solution 4
// const arr4 = [1, 2, 3, 22, 10, 3, 6, 9];


// // Double the Numbers
// const array = [1, 2, 3, 4, 5];
// const doubled = array.map((e) => e * 2);
// console.log(doubled);

// // Convert to Uppercase
// const array2 = ['apple', 'banana', 'cherry'];
// const upperCase = array2.map((e) => e.toUpperCase());
// console.log(upperCase);

// // Extract First Names
// const array3 = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Alice', lastName: 'Johnson' }
// ]
// const firstName = array3.map((e) => e.firstName);
// console.log(firstName);

// // Square the Numbers
// const array4 = [2, 4, 6, 8, 10];
// const squared = array4.map((e) => Math.pow(e, 2));
// console.log(squared);

// // Add Suffix
// const array5 = ['run', 'jump', 'swim'];
// const suffixAdded = array5.map((e) => e + 'ing');
// console.log(suffixAdded);

// // Convert to Lengths
// const array1 = ['hello', 'world', 'JavaScript'];
// const array1Lengnths = array1.map((e) => e.length);
// console.log(array1Lengnths);

// // Get Price Tags
// const array2 = [10, 20, 30];
// const priceFormatted = array2.map((e) => `$${e}`);
// console.log(priceFormatted);

// // Square Roots
// const array3 = [1, 4, 9, 16];
// const sqrt = array3.map((e) => Math.sqrt(e));
// console.log(sqrt);

// // Convert to Objects
// const array4 = ['red', 'green', 'blue'];
// const arrayOfObject = array4.map((e) => {
//     const obj = {};
//     obj.color = e;
//     return obj;
// })
// console.log(arrayOfObject);

// // Extract Initials
// const array5 = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Alice', lastName: 'Johnson' }
// ]
// const Initials = array5.map((e) => `${e.firstName[0]}.${e.lastName[0]}`);
// console.log(Initials);

// // Reverse Strings
// const array1 = ['abc', 'def', 'ghi'];
// const reversed = array1.map(e => e.split('').reverse().join(''))
// console.log(reversed);

// // Convert to Boolean
// const array2 = [0, 1, '', 'Hello', null, 42];
// const boolean = array2.map((e) => !!e);
// console.log(boolean);

// // Get Full Names
// const array3 = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Alice', lastName: 'Johnson' }
// ];
// const fullNames = array3.map((e) => `${e.firstName} ${e.lastName}`);
// console.log(fullNames);

// // Multiply by Index
// const array4 = [1, 2, 3, 4];
// const mulByInd = array4.map((e, i) => e * i);
// console.log(mulByInd);

// // Extract Year
// const array5 = ['2021-01-01', '2022-05-15', '2023-07-20'];
// const years = array5.map((e) => new Date(e).getFullYear());
// console.log(years);


// // Get Even Numbers
// const array1 = [1, 2, 3, 4, 5, 6];
// const even = array1.map((e) => e > 50)
// console.log(even);

// // Get Odd Numbers
// const array1 = [1, 2, 3, 4, 5, 6];
// const print = array1.filter((e) => e % 2 !== 0);
// console.log(print);

// // Filter Long Words
// const array2 = ['apple', 'banana', 'cherry', 'kiwi', 'melon'];
// const longWords = array2.filter((e) => e.length > 5)
// console.log(longWords);

// // Filter Adults
// const array3 = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 30 }
// ]
// const adults = array3.filter((e) => e.age >= 18);
// console.log(adults);

// // Filter Positive Numbers
// const array4 = [-3, -2, -1, 0, 1, 2, 3];
// const posNums = array4.filter((e) => e > 0);
// console.log(posNums);

// // Filter Unique Values
// const array5 = [1, 2, 2, 3, 4, 4, 5];
// const uniqueValues = array5.filter((e) => array5.indexOf(e) === array5.lastIndexOf(e))
// console.log(uniqueValues);

// // Filter Even Numbers
// const array1 = [10, 15, 20, 25, 30]
// const even = array1.filter((e) => e % 2 === 0);
// console.log(even);

// // Filter Short Words
// const array2 = ['cat', 'elephant', 'dog', 'mouse'];
// const shortWords = array2.filter((e) => e.length <= 3);
// console.log(shortWords);

// // Filter Out Falsy Values
// const array3 = [0, 'Hello', false, null, 42, '', undefined];
// const truthyValues = array3.filter((e) => !!e);
// console.log(truthyValues);

// // Filter Names Starting with 'J'
// const array4 = ['John', 'Alice', 'Jane', 'Bob'];
// const j = array4.filter((e) => e[0] === 'J' || e[0] === 'j');
// console.log(j);

// // Filter Ages Below 21
// const array5 = [
//     { name: 'Alice', age: 20 },
//     { name: 'Bob', age: 22 },
//     { name: 'Charlie', age: 19 }
// ];
// const below21 = array5.filter((e) => e.age < 21);
// console.log(below21);