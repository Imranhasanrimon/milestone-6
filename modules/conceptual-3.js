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

// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise is made');
//     setTimeout(() => {
//         const status = false;
//         if (status) {
//             resolve('resolved')
//         } else {
//             reject('rejected')
//         }
//     }, 2000)

// })

// // promise1
//     .then(res => {
//         console.log(res);
//         console.log('response then block')
//     })
//     .catch(err => console.log('this is catch block'))
//     .finally(() => {
//         console.log('this is finally block');
//     })

// const getPromise = async () => {
//     try {
//         const response = await promise1;
//         console.log(response);
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log('this is finally block');
//     }
// }
// getPromise()

// const promise1 = new Promise((resolve, reject) => {
//     console.log('promise is made');
//     setTimeout(() => {
//         resolve('resolved promise 1')
//     }, 1000)

// })
// const promise2 = new Promise((resolve, reject) => {
//     console.log('promise is made');
//     setTimeout(() => {
//         resolve('resolved promise 2')
//     }, 2000)

// })

// promise1
//     .then(res => {
//         console.log(res);
//         promise2
//             .then(res => {
//                 console.log(res)
//                 promise3
//                     .then(res => {
//                         console.log(res);
//                     })
//             })
//     })

// Promise.all([promise1, promise2, promise3])
//     .then(values => {
//         console.log(values[0]);
//     })

const fetching = (name) => {
    return new Promise((resolve, reject) => {
        console.log(name, 'promise is made');
        setTimeout(() => {
            resolve('resolved promise 3')
        }, 3000)

    })
}

fetching('imrna')
    .then(res => console.log(res))