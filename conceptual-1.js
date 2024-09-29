// console.log('testing');
// if (true) {
//     var x = 5;
//     console.log(x);
// }
// console.log(x);

// if (true) {
//     let x = 5;
//     console.log(x);
// }
// console.log(x);

// console.log(6 + undefined);

// let x = true;
// console.log(x && false);               //logical operator
// console.log(x || 'or right side');

//spread operator for copying
// const arr1 = [1, 2, 3, 4];
// const arr2 = [...arr1];
// arr1.push(100);
// arr2.push(200)
// console.log(arr1);
// console.log(arr2);

//destructuring from an array
// const names = ['Najmul', 'Saad', 'Ariful'];
// const [_, x] = names;     //skiping by underscore for single time but for multiple time, we should use diffrent variables
// console.log(x);


//destructuring from an object
// const myInfo = {
//     name: 'imran hasan',
//     age: 23,
//     dist: 'Bogura',
//     isMarried: false,
//     constact: {
//         email: 'imranhasanrimon5@gmail.com',
//         mobile: '01743-621957'
//     }
// }
// const { constact: { email }, age } = myInfo;
// // console.log(constact);
// // const { email } = constact;
// console.log(email);
// myInfo.age = 25;
// console.log(age);
// console.log(myInfo);

//optional chaining
// console.log(myInfo.address?.village);

// forEach method in array 
const array = [10, 20, 30, 40, 50, 60, 70, 80];
// const double = array.map((i) => i * 2)
// console.log(double);

// find method for getting the first occurrane
const find = array.find((e) => e > 50);
const filter = array.filter((e) => e > 50);
console.log(find);
console.log(filter);