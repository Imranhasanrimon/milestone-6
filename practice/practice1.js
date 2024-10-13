// // //callback function
// // function displayer(result) {
// //     console.log(result);
// // }

// // function calculate(a, b, displayer) {
// //     const sum = a + b;
// //     if (displayer) displayer(sum)
// // }

// // calculate(7, 2, displayer)

// // //asynchronous function
// // const callback = () => {
// //     console.log('line 2');
// // }

// // console.log('line 1');

// // setTimeout(callback, 1000);

// // console.log('line 3');


// /*
// ___________________________________________________________
// //example of callback pattern
// const paymentSuccessful = true;
// const marks = 89;

// function enroll(callback) {
//     console.log('Enrollment is in progress');

//     setTimeout(function () {
//         if (paymentSuccessful) {
//             callback();
//         } else {
//             console.log('payment faild');
//         }
//     }, 2000)
// }

// function progress(callback) {
//     console.log('course is in progress');
//     setTimeout(function () {
//         if (marks >= 80) {
//             callback();
//         } else {
//             console.log('you could not get enough marks');
//         }
//     }, 1000)
// }

// function certificate() {
//     console.log('preparing certificate');
//     setTimeout(function () {
//         console.log('you got the certificate');
//     }, 800)
// }
// enroll(function () {
//     progress(certificate)
// })
// ___________________________________________________________
// */

// /*
// ___________________________________________________________
// // Promises syntax
// const condition = true;

// console.log('Task 1');

// //defining promise function / producing code
// const promise = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         if (condition) {
//             resolve('Task 2');
//         } else {
//             reject('failed');
//         }
//     }, 500)

// })

// //calling promise function / consuming code
// promise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

// console.log('Task 3');
// ___________________________________________________________
// */

// /*
// ___________________________________________________________
// //example of promise
// const paymentSuccessful = false;
// const marks = 89;

// function enroll() {
//     console.log('course enrollment is in progress');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (paymentSuccessful) {
//                 resolve();
//             } else {
//                 reject('payment faild');
//             }
//         }, 2000)
//     })

//     return promise;
// }

// function progress() {
//     console.log('course is in progress');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 80) {
//                 resolve();
//             } else {
//                 reject('you could not get enough marks');
//             }
//         }, 1000)
//     })

//     return promise;
// }

// function getCertificate() {
//     console.log('preparing certificate');

//     const promise = new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve('you got the certificate');
//         }, 800)
//     })

//     return promise;
// }

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
// ___________________________________________________________
// */


// /*
// ___________________________________________________________
// //ASYNC,AWAIT




// const paymentSuccessful = true;
// const marks = 69;

// function enroll() {
//     console.log('course enrollment is in progress');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (paymentSuccessful) {
//                 resolve();
//             } else {
//                 reject('payment faild');
//             }
//         }, 2000)
//     })

//     return promise;
// }

// function progress() {
//     console.log('course is in progress');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 80) {
//                 resolve();
//             } else {
//                 reject('you could not get enough marks');
//             }
//         }, 1000)
//     })

//     return promise;
// }

// function getCertificate() {
//     console.log('preparing certificate');

//     const promise = new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve('you got the certificate');
//         }, 800)
//     })

//     return promise;
// }

// async function course() {
//     try {
//         await enroll();
//         await progress();
//         const message = await getCertificate();
//         console.log(message);

//     } catch (error) {
//         console.log(error);
//     }
// }
// course()


// // enroll()
// //     .then(progress)
// //     .then(getCertificate)
// //     .then(function (value) {
// //         console.log(value);
// //     })
// //     .catch(function (error) {
// //         console.log(error);
// //     })
// */

// // enroll()
// //     .then(progress)
// //     .then(getCertificate)
// //     .then(function (value) {
// //         console.log(value);
// //     })
// //     .catch(function (error) {
// //         console.log(error);
// //     })
// // // enroll()
// // //     .then(progress)
// // //     .then(getCertificate)
// // //     .then(function (value) {
// // //         console.log(value);
// // //     })
// // //     .catch(function (error) {
// // //         console.log(error);
// // //     })
// // */

// // // enroll()
// // //     .then(progress)
// // //     .then(getCertificate)
// // //     .then(function (value) {
// // //         console.log(value);
// // //     })
// // //     .catch(function (error) {
// // //         console.log(error);
// // //     })



// function enroll() {
//     console.log('course enrollment is in progress');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (paymentSuccessful) {
//                 resolve();
//             } else {
//                 reject('payment faild');
//             }
//         }, 2000)
//     })

//     return promise;
// }

// function progress() {
//     console.log('course is in progress');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 80) {
//                 resolve();
//             } else {
//                 reject('you could not get enough marks');
//             }
//         }, 1000)
//     })

//     return promise;
// }

// function getCertificate() {
//     console.log('preparing certificate');

//     const promise = new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve('you got the certificate');
//         }, 800)
//     })

//     return promise;
// }
// function progress() {
//     console.log('course is in progress');

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 80) {
//                 resolve();
//             } else {
//                 reject('you could not get enough marks');
//             }
//         }, 1000)
//     })

//     return promise;
// }

// function getCertificate() {
//     console.log('preparing certificate');

//     const promise = new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve('you got the certificate');
//         }, 800)
//     })

//     return promise;
// }