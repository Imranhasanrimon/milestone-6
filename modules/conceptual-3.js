//scope shadowing or variable shadowing
// let x = 5;
// if (true) {
//     let x = 10;
//     console.log(x);
// }

//logical and operation && ||
// const isStudent = true
// console.log(isStudent && 'he is a student');

// const name = false;
// console.log(name || 'N/A');

//spread operator
// const numbers = [1, 2, 3, 5];
// const numbers2 = [...numbers];
// numbers2.push(21, 50)
// console.log(numbers);
// console.log(numbers2);

//rest operator
// const numbers = [1, 2, 3, 5];
// const [x, ...a] = numbers;      //this is rest operator
// console.log(x);
// console.log(a);

//object spread operator
// const obj = {
//     name: 'Imran',
//     age: 23
// }

// const obj2 = { ...obj };
// obj2.isMarried = false
// console.log(obj);
// console.log(obj2);

// const numbers = [1, 2, 3, 5];
// const mapped = numbers.map((num) => console.log(num))
// console.log(mapped);

//______________________________________________________________________________
// const fetchData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data))
// }
// fetchData()

// const fetchData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);

// }

// fetchData()

const promise1 = new Promise((resolve, reject) => {
    console.log('promise is made');
    resolve('forlm inside')

})

promise1
    .then(res => {
        console.log(res)
    })