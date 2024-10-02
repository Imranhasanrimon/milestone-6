// let message = 'Hello!';
// setTimeout(() => {
//     message = 'Goodbye!';
// }, 0);
// console.log(message);

// // What is the output of the following JavaScript code using async/await?

// async function myFunction() {
//     return "Hello";
// }
// myFunction().then(console.log);

// let x = 1;
// let intervalId = setInterval(() => {
//     console.log(x++);
//     if (x > 3) clearInterval(intervalId);
// }, 1000);

// console.log("A");
// Promise.resolve().then(() => console.log("B"));
// setTimeout(() => console.log("C"), 0);
// console.log("D");


//callback problems---------

// Problem 1: Greeting Callback
const greet = (name, callback) => {
    console.log(callback(name));
};

const callback = (nam) => 'hellow ' + nam;
greet('Imran', callback)


// Problem 2: Array Squaring
const squareArray = (array, callback) => {
    console.log(callback(array));
};

const callback2 = (array) => array.map((ele) => ele ** 2)
const array = [2, 4, 3, 5]
squareArray(array, callback2)

// Problem 3: Filter Even Numbers
const filterEvens = (arr, callback) => {
    console.log(callback(arr));
}

const callback3 = (arr) => arr.filter((e) => e % 2 === 0);
const Numbers = [1, 3, 4, 8, 7, 10, 5, 15]
filterEvens(Numbers, callback3)