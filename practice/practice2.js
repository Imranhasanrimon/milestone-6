/*                  PROMISE PROBLEMS                    */
//problem___________1
// function getUserData() {

//     const promise = new Promise(function (res, rej) {
//         setTimeout(function () {
//             res("User data received")
//         }, 2000)
//     });

//     return promise;
// }

// getUserData()
//     .then(function (value) {
//         console.log(value);
//     })

//problem___________2
// function getOrderStatus() {

//     const promise = new Promise(function (res, rej) {
//         setTimeout(function () {
//             res("Order processed")
//         }, 3000)
//     });

//     return promise;
// }

// getOrderStatus()
//     .then(function (value) {
//         console.log(value);
//     })

//problem___________3
// function checkInventory() {
//     const promise = new Promise(function (res, rej) {
//         const inStock = Math.random()
//         setTimeout(function () {
//             if (inStock < 0.5) {
//                 res("Item in stock");
//             } else {
//                 rej("Item out of stock")
//             }

//         }, 2000)
//     })

//     return promise;
// }

// checkInventory()
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

//problem___________4
// function fetchWeatherData() {
//     const randomDelay = 500 + Math.random() * (3000 - 500);
//     const promise = new Promise(function (res, rej) {
//         setTimeout(function () {
//             if (randomDelay < 2000) {
//                 res("Weather data available");
//             } else {
//                 rej("Unable to fetch weather data")
//             }
//         }, randomDelay)
//     })
//     return promise;
// }

// fetchWeatherData()
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })


//problem___________5
// function loginUser() {
//     const randomDelay = 1000 + Math.random() * (4000 - 1000);

//     const promise = new Promise(function (res, rej) {

//         setTimeout(function () {
//             if (randomDelay < 3000) {
//                 res("Login successful")
//             } else {
//                 rej("Login failed")
//             }
//         }, randomDelay)

//     });

//     return promise;
// }

// loginUser()
//     .then(value => console.log(value))
//     .catch(error => console.log(error))

// ---------------------------------------------------------------
/*                  ASYNC/AWAIT PROBLEMS                    */
//problem___________1
// function getUserData() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("User data retrieved")
//         }, 2000)
//     })
// }

// async function fetchUserData() {
//     const message = await getUserData();
//     console.log(message);

// }
// fetchUserData()


//problem___________2
// problem___________1
// function getUserData() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("User data retrieved")
//         }, 2000)
//     })
// }

// async function fetchUserData() {
//     const message = await getUserData();
//     console.log(message);

// }
// fetchUserData()


// problem___________2
//problem___________5
// function loginUser() {
//     const randomDelay = 1000 + Math.random() * (4000 - 1000);

//     const promise = new Promise(function (res, rej) {

//         setTimeout(function () {
//             if (randomDelay < 3000) {
//                 res("Login successful")
//             } else {
//                 rej("Login failed")
//             }
//         }, randomDelay)

//     });

//     return promise;
// }

// loginUser()
//     .then(value => console.log(value))
//     .catch(error => console.log(error))

// ---------------------------------------------------------------
/*                  ASYNC/AWAIT PROBLEMS                    */
//problem___________1
// function getUserData() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("User data retrieved")
//         }, 2000)
//     })
// }

// async function fetchUserData() {
//     const message = await getUserData();
//     console.log(message);

// }
// fetchUserData()


problem___________2
problem___________1
function getUserData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("User data retrieved")
        }, 2000)
    })
}

async function fetchUserData() {
    const message = await getUserData();
    console.log(message);

}
fetchUserData()


problem___________2