
// fetch('https://openapi.programming-hero.com/api/peddy/pets')
//     .then(res => res.json())
//     .then(data => console.log(data))

// setTimeout(() => {
//     // document.getElementById('my_modal_5').close()
//     // my_modal_5.close()
//     console.log('time over');
// }, 1500)

// let counter = 3;
// const helloText = document.getElementById('hello');
// const setIntervalId = () => {
//     setInterval(() => {
//         counter--;
//         helloText.innerText = counter;
//         console.log('1s has gone');
//     }, 1000)
//     clearInterval(setIntervalId)
// }

// const asyncFunc = () => {
//     setIntervalId()
//     setTimeout(() => {
//         console.log('time over');
//         clearInterval(setIntervalId);
//         setTimeout(() => {
//             my_modal_5.close()
//         }, 1000);
//     }, 2000);
// }
// const asyncFunc = () => {
//     setIntervalId()
//     setTimeout(() => {
//         console.log('time over');
//         clearInterval(setIntervalId);
//         setTimeout(() => {
//             my_modal_5.close()
//         }, 1000);
//     }, 2000);
// }

// fetch('https://official-joke-api.appspot.com/random_joke')
//     .then(res => res.json())
//     .then(data => dispalyJoke(data))

// const dispalyJoke = (data) => {
//     console.log(data.setup, data.punchline);
// }

// console.log(this);
// console.log(window);
// console.log(window === this);

// const name = 'Tom';
// function sayname() {
//     console.log(this.name);
// }

// console.log('Inside GEC');
// var a = 5;
// function testMe() {
//     console.log("Inside testMe EC");
//     var b = 10;
//     var user = {
//         name: "imran",
//         country: "BD"
//     };
//     function testAgain() {
//         console.log('Inside testAgain EC');
//         console.log('Exiting testAgain EC');
//     };
//     testAgain();
//     console.log('Exiting testMe EC');
// }
// testMe();
// console.log("Exiting GEC");

// const message = "I can do it";

// function sum(a, b) {
//     const result = a + b;
//     return result;
// }

// function mul(a, b) {
//     const result = a * b;
//     return result;
// }

// function calc(a, b) {
//     return sum(a, b) + mul(a, b);
// }

// function getResul(a, b) {
//     return calc(a, b);
// }
// console.log(getResul(5, 7));;

// console.log('name is', name);
// var name;
// name = 'tom';
// console.log('name is', name);

//---------------Scope----------------
// Global Scope: everything outside of function
// functional Scope: everything inside of function
// Block Scope: inside for loop, switch case, if statement etc. which are witthin curly braces;

// if (true) {
//     let x = 10;
//     var y = 5;
// }
// console.log(y);
// console.log(x);

//---------------Lexical Scope----------------
// function jerry() {
//     console.log(name);
// }
// function tom() {
//     var name = 'tom'
//     jerry()
// }
// var name = 'Cartoon';

// tom()
//---------------Lexical Scope----------------
// function jerry() {
//     console.log(name);
// }
// function tom() {
//     var name = 'tom'
//     jerry()
// }
// var name = 'Cartoon';

// tom()

// function firstFunction() {
//     console.log("First Function");
// }

// function secondFunction() {
//     firstFunction()
//     // Call firstFunction here
//     console.log("Second Function");
// }

// secondFunction()
// // Call secondFunction here

// function start() {
//     middle()
//     // Call middle function here
//     console.log("Start");
// }

// function middle() {
//     end()
//     // Call end function here
//     console.log("Middle");
// }

// function end() {
//     console.log("End");
// }
// start()
// // Call start function here

// function outer() {
//     let x = "Outer";
//     // Call inner function here
//     inner()
// }

// function inner() {
//     let x = "Inner";
//     // Call display function here
//     display()
// }

// function display() {
//     // Print x here
//     console.log(x);
// }

// // Call outer function here
// outer()

// console.log(x);  // What will this log?
// var x = 5;

// function end() {
//     console.log("End");
// }
// start()
// // Call start function here

// function outer() {
//     let x = "Outer";
//     // Call inner function here
//     inner()
// }

// function inner() {
//     let x = "Inner";
//     // Call display function here
//     display()
// }

// function display() {
//     // Print x here
//     console.log(x);
// }

// // Call outer function here
// outer()

// console.log(x);  // What will this log?
// var x = 5;
// function outer() {
//     let x = "Outer";
//     // Call inner function here
//     inner()
// }

// function inner() {
//     let x = "Inner";
//     // Call display function here
//     display()
// }

// function display() {
//     // Print x here
//     console.log(x);
// }

// // Call outer function here
// outer()

// console.log(x);  // What will this log?
// var x = 5;

// Closures

// function human(name) {
//     function sayHi() {
//         console.log(`Hi I am ${name}`);
//     }

//     function sayHouYouFeel() {
//         console.log(`${name} is feeling good`);
//     }
//     sayHi()
//     sayHouYouFeel()
// }

// const imran = human('Imran');
// const najmul = human('Najmul')

// var num1 = 2;
// var sum = () => {
//     var num2 = 3;
//     return function () {
//         return num1 + num2
//     }
// }

// var myFunc = sum();
// console.dir(myFunc);

function outer() {
    console.log('outer');
    return function inner() {
        console.log('inner');
    }
}

const x = outer();
x()