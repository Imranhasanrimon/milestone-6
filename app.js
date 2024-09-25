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

//arrow function
function add(a, b) {  //func declaration
    return a + b;
}

const add2 = function (a, b) { //func expression
    return a + b;
}
// console.log(add2(5, 90));
add2(2, 5)