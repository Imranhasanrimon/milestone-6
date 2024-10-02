// //callback function
// function displayer(result) {
//     console.log(result);
// }

// function calculate(a, b, displayer) {
//     const sum = a + b;
//     if (displayer) displayer(sum)
// }

// calculate(7, 2, displayer)

// //asynchronous function
// const callback = () => {
//     console.log('line 2');
// }

// console.log('line 1');

// setTimeout(callback, 1000);

// console.log('line 3');


/*
___________________________________________________________
//example of callback pattern
const paymentSuccessful = true;
const marks = 89;

function enroll(callback) {
    console.log('Enrollment is in progress');

    setTimeout(function () {
        if (paymentSuccessful) {
            callback();
        } else {
            console.log('payment faild');
        }
    }, 2000)
}

function progress(callback) {
    console.log('course is in progress');
    setTimeout(function () {
        if (marks >= 80) {
            callback();
        } else {
            console.log('you could not get enough marks');
        }
    }, 1000)
}

function certificate() {
    console.log('preparing certificate');
    setTimeout(function () {
        console.log('you got the certificate');
    }, 800)
}
enroll(function () {
    progress(certificate)
})
___________________________________________________________
*/

// Promises
const condition = false;

console.log('Task 1');

//defining promise function
const promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        if (condition) {
            resolve('Task 2');
        } else {
            reject('failed');
        }
    }, 500)

})

promise
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    })

console.log('Task 3');