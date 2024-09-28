// let x = ['imran', 'hasan', 'rimon']
// let y = x;
// y[1] = 'ali'
// console.log(x, y);

// function myFunc(a, b) {
//     const total = a + b;
// }
// console.log(myFunc(3, 5));

//type coersion
// const a = 1;
// const b = true;
// console.log(b === a);

// const x = [];
// const y = x;
// console.log(x == y);

//scope------ hoisting
// if (true) {
//     console.log('inside if block');
//     const a = 0;
//     console.log(a);
// }

// scope()
// function scope() {
//     console.log('hoistionb');
// }

// myFunc()
// const myFunc = function () {
//     console.log('func expression');
// }

//---------Closure------
function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast
    }
}
const server = kitchen();
console.log(server());
console.log(server());
console.log(server());
console.log(server());
const server2 = kitchen();
console.log(server2());
console.log(server2());
console.log(server2());
console.log(server());