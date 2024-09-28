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

let x = 5;
function change() {
    x = 10;
    console.log(x);
};
console.log(x);
change()
console.log(x);