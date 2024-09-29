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
const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1];
arr1.push(100);
arr2.push(200)
console.log(arr1);
console.log(arr2);