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

//object destructuring
const obj = {
    name: 'Imran',
    age: 23
}

const obj2 = { ...obj };
obj2.isMarried = false
console.log(obj);
console.log(obj2);