
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

const message = "I can do it";

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}

function calc(a, b) {
    return sum(a, b) + mul(a, b);
}

function getResul(a, b) {
    return calc(a, b);
}
console.log(getResul(5, 7));;