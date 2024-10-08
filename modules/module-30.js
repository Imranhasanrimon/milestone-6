// module 30
//ES6 features___________________
// const money = 30;
// const rich = money + 50;
// console.log(money);
// console.log(rich);

//default parameter
// function add(num1, num2) {
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result
// }
// const sum = add(5)

//arrow function----------
// function add(a, b) {  //func declaration
//     return a + b;
// }

// const add2 = function (a, b) { //func expression
//     return a + b;
// }
// /* arrow function is like function expression */
// const add3 = (a, b) => a + b; //arrow function

// const getAge = (age) => age.age;
// const person = {
//     name: 'imrna hasan',
//     age: 23
// }

// //no parenthesis for single parameter
// const myfunc = perm => perm + 5;
// console.log(myfunc(5));

//...spread operator----------
// const numbers = [12, 25, 45, 35, 89, 75];
// const maxNumber = Math.max(...numbers)
// console.log(maxNumber);

// Destructuring----------
// const person = {
//     name: 'imrna hasan',
//     age: 23,
//     profession: 'full stack engineer',
//     isMarried: true
// }
// const { name, age } = person; //destructuring by property name
// const { profession, age: boyos } = person; //destructuring by diffrent name
// //for array destructuring
// const friends = ['saad', 'najmul', 'ariful', 'abdur rahman', 'taijul', 'ibrahim', 'zahid']
// const [best, better] = friends;
// const [, , good, normal] = friends; //skiping by commas
// console.log(best);
// console.log(better, good, normal);

//keys----------
// const person = {
//     name: 'imrna hasan',
//     age: 23,
//     profession: 'full stack engineer',
//     isMarried: true
// }
// const keys = Object.keys(person);
// const values = Object.values(person)
// // console.log(...keys, ...values); //spread recape

// //two dymensional array or array of array
// const pair = Object.entries(person)
// console.log(pair);
// console.log(person);
// delete person.isMarried;  //by delete keyword
// const { isMarried, ...newPersonObj } = person; //by destructuring form main
// console.log(newPersonObj);

//swaping------
// let firstName = 'Imran', lastName = 'Hasan';
// [lastName, firstName] = [firstName, lastName]
// console.log(firstName, lastName);

/*            practice Problem1            */
// task---1
// const arrowFunc = (a, b, c) => a * b * c;
// console.log(arrowFunc(2, 4, 3));

// // task---2
// const tast2 = `
// I am a web developer
// I love to code
// I love to eat biriyani`;
// console.log(tast2);
// //task---3
// const task3 = (a, b = 5) => a + b;
// console.log(task3(2, 10));

/*            practice Problem2            */
// task---1
// const friends = ['Najmul', 'Saad', 'Ariful', 'AB Rahman', 'Imran'];

// const newArr = [];
// const isEven = (arr) => {
//     for (let i of arr) {
//         if (i.length % 2 === 0) {
//             newArr.push(i);
//         }
//     }
//     return newArr
// }

// console.log(isEven(friends));


/*            practice Problem3            */
// const Problem3 = (numArray) => {
//     const squareArray = [];
//     let sum = 0;
//     for (let i of numArray) {
//         const square = i ** 2;
//         squareArray.push(square);
//         sum += square;
//     }
//     const average = sum / squareArray.length
//     return average
// }
// console.log(Problem3(nums));

/*            practice Problem4            */
// const nums2 = [10, 20, 30, 40];
// const Problem4 = (arr1, arr2) => {
//     const newArr = [];
//     newArr.push(...arr1, ...arr2);
//     const maxNum = Math.max(...newArr);
//     return maxNum;
// }
// console.log(Problem4(nums, nums2));
// const arrowFn = (a, a, a) => console.log(a);