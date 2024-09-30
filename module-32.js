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

//     solution 1
const arr = [10, 20, 30, 40, 50];
const total = arr.reduce((accumulator, cu) => accumulator + cu, 0);
console.log(total);

//     solution 2
const arr2 = [1, 2, 3, 5];
const product = arr2.reduce((accumulator, current) => accumulator * current, 1);
console.log(product);

//     solution 3
const arr3 = [1, 2, 3, 22, 10, 3, 6, 9];
// const largestNum = arr3.reduce((accumulator,current)=> current?accumulator )

//     solution 4
const arr4 = [1, 2, 3, 22, 10, 3, 6, 9];