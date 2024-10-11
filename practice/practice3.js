
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

fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => dispalyJoke(data))

const dispalyJoke = (data) => {
    console.log(data.setup, data.punchline);
}