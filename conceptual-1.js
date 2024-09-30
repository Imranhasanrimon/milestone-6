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
// const array = [10, 20, 30, 40, 50, 60, 70, 80];
// const double = array.map((i) => i * 2)
// console.log(double);

// find method for getting the first occurrane
// const find = array.find((e) => e > 50);
// const filter = array.filter((e) => e > 50);
// console.log(find);
// console.log(filter);
// console.log(!![]);

// //solution-1
// const nums = [2, 5, 7, 1];
// const solution = nums.reduce((accumulator, current) => accumulator + current)
// console.log(solution);

// //solution-2
// const nums2 = [2, 3, 4];
// const solution2 = nums2.reduce((accumulator, current) => accumulator * current, 1);
// console.log(solution2);

// //solution-3
// const words = ['apple', 'banana', 'pineapple', 'mango'];
// const solution3 = words.reduce((accumulator, current) => accumulator > current.length, 0);
// console.log(solution3);

// //solution-4
// const words2 = ['apple', 'banana', 'mango'];
// const solution4 = words2.reduce((accumulator, current) => accumulator + current.length, 0);
// console.log(solution4);

// //solution-5
// const nums3 = [10, 22, 5, 3, 99, 7];
// const solution5 = nums3.reduce((accumulator, current) =>);
// console.log(solution5);

// const users = [
//     {
//         id: 1,
//         name: 'Alice',
//         email: 'alice@example.com',
//         age: 28,
//         country: 'USA',
//         hobbies: ['reading', 'hiking'],
//         address: {
//             street: '123 Main St',
//             city: 'New York',
//             zip: '10001'
//         }
//     },
//     {
//         id: 2,
//         name: 'Bob',
//         email: 'bob@example.com',
//         age: 34,
//         country: 'Canada',
//         hobbies: ['cooking', 'cycling'],
//         address: {
//             street: '456 Elm St',

//             zip: 'M4B 1B3'
//         }
//     },
//     {
//         id: 3,
//         name: 'Charlie',
//         email: 'charlie@example.com',
//         age: 22,
//         country: 'USA',
//         hobbies: ['gaming', 'photography'],
//         address: {
//             street: '789 Maple Ave',
//             city: 'Los Angeles',
//             zip: '90001'
//         }
//     },
//     {
//         id: 4,
//         name: 'Diana',
//         email: 'diana@example.com',
//         age: 31,
//         country: 'UK',
//         hobbies: ['painting', 'traveling'],
//         address: {
//             street: '101 High St',

//             zip: 'EC1A 1BB'
//         }
//     },
//     {
//         id: 5,
//         name: 'Eve',
//         email: 'eve@example.com',
//         age: 26,
//         country: 'USA',
//         hobbies: ['running', 'writing'],
//         address: {
//             street: '202 Oak St',
//             city: 'Chicago',
//             zip: '60601'
//         }
//     }
// ];

// users.map((user) => {
//     const sentence = `
//     person's name is ${user.name} and city: ${user?.address?.city || 'N/A'}
//     `
//     console.log(sentence);
// })

// const x = users.find((user) => user.age === 22)
// console.log(x);

/*                         Problem Solving                               */
// ______________________________________________________________________________
// const students = [
//     {
//         name: 'Alice Johnson',
//         email: 'alice.johnson@example.com',
//         avgMark: 45,
//         fiftyPercent: false
//     },
//     {
//         name: 'Bob Smith',
//         email: 'bob.smith@example.com',
//         avgMark: 55,
//         fiftyPercent: true
//     },
//     {
//         name: 'Charlie Brown',
//         email: 'charlie.brown@example.com',
//         avgMark: 30,
//         fiftyPercent: false
//     },
//     {
//         name: 'Diana Prince',
//         email: 'diana.prince@example.com',
//         avgMark: 60,
//         fiftyPercent: true
//     },
//     {
//         name: 'Eve Adams',
//         email: 'eve.adams@example.com',
//         avgMark: 50,
//         fiftyPercent: true
//     },
//     {
//         name: 'Frank Castle',
//         email: 'frank.castle@example.com',
//         avgMark: 20,
//         fiftyPercent: false
//     },
//     {
//         name: 'Grace Lee',
//         email: 'grace.lee@example.com',
//         avgMark: 35,
//         fiftyPercent: false
//     },
//     {
//         name: 'Henry Cavill',
//         email: 'henry.cavill@example.com',
//         avgMark: 58,
//         fiftyPercent: true
//     },
//     {
//         name: 'Isla Fisher',
//         email: 'isla.fisher@example.com',
//         avgMark: 48,
//         fiftyPercent: false
//     },
//     {
//         name: 'Jack Sparrow',
//         email: 'jack.sparrow@example.com',
//         avgMark: 53,
//         fiftyPercent: true
//     }
// ];
// const passedInfo = students.filter((student) => student.avgMark >= 48 && student.fiftyPercent === true);
// const passedInfoNames = passedInfo.map((student) => student.name)
// console.log(passedInfo);
// console.log(passedInfoNames);

// const findSCIC = (arrayOfObject) => {
//     const passedInfo = arrayOfObject.filter((student) => student.avgMark >= 48 && student.fiftyPercent === true);
//     const names = passedInfo.map((student) => student.name);
//     return names
// }
// const result = findSCIC(students);
// console.log(result);

// const grooms = [
//     { name: 'abul', job: 'public', salary: 17000 },
//     { name: 'babul', job: 'privat', salary: 25000 },
//     { name: 'kabul', job: 'public', salary: 21000 },
//     { name: 'habul', job: 'privat', salary: 47000 },
//     { name: 'jabul', job: 'public', salary: 23000 },
//     { name: 'mabul', job: 'privat', salary: 55000 },
// ];
// const eligible = grooms.filter((groom) => (groom.job === 'public' && groom.salary >= 20000) || (groom.job === 'privat' && groom.salary >= 40000));
// console.log(eligible);
// const names = eligible.map((i) => i.name);
// console.log(names);
// const lottery = Math.floor(Math.random() * names.length);
// console.log(lottery);
// console.log(names[lottery], 'you are eligible');

//____________________________EXECUTION CONTEXT____________________________
// function sayName() {
//     var name = "someName";
//     console.log("The name is,", name);
// }
// sayName()

// console.log('name is ', name);
// var name;
// name = 'tom';
// console.log('name is ', name);

myFunc()
function myFunc() {
    console.log('this is regular function');
}
expFunc()
const expFunc = function () {
    console.log('this is function as expression');
}
