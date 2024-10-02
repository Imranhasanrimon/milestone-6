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


// //callback problems---------

// // Problem 1: Greeting Callback
// const greet = (name, callback) => {
//     console.log(callback(name));
// };

// const callback = (nam) => 'hellow ' + nam;
// greet('Imran', callback)


// // Problem 2: Array Squaring
// const squareArray = (array, callback) => {
//     console.log(callback(array));
// };

// const callback2 = (array) => array.map((ele) => ele ** 2)
// const array = [2, 4, 3, 5]
// squareArray(array, callback2)

// // Problem 3: Filter Even Numbers
// const filterEvens = (arr, callback) => {
//     console.log(callback(arr));
// }

// const callback3 = (arr) => arr.filter((e) => e % 2 === 0);
// const Numbers = [1, 3, 4, 8, 7, 10, 5, 15]
// filterEvens(Numbers, callback3)

// // Problem 4: Array Lengths
// const getLengths = (arr, callback) => console.log(callback(arr));

// const callback4 = (arr) => arr.map((e) => e.length)
// const names = ['imran', 'najmul', 'saad'];
// getLengths(names, callback4);

// // Problem 5: Convert to Uppercase
// const toUpperCaseArray = (arr, callback) => console.log(callback(arr));

// const callback5 = (arr) => arr.map((e) => e.toUpperCase())

// toUpperCaseArray(names, callback5)

console.log('line 1 code')

setTimeout(() => {
    for (let x = 0; x < 50; x++) {
        console.log('line 2 code')
    }
}, 1)

setTimeout(() => {
    for (let x = 0; x < 10; x++) {
        console.log('line 3 code')

    }
})

//to maintain the oreder of asynchronous function, callback function is needed