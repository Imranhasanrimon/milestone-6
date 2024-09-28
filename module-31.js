// // Array Map-------
// const nums = [2, 5, 3, 7, 50, 39, 13];
// function dob(num) {
//     // console.log(num);
//     return num * 2;
// }
// // console.log(nums.map(dob));
// // console.log(nums.map(n => n * 3));

// //Array Filter------
// console.log(nums.filter(n => n > 9));
// console.log(nums.filter(n => n % 2 === 0));

// //Array Find------
// console.log(nums.find(n => n > 10)); // find will always give single first occurrence element that pass the condition. this is almost like filter but filter provides all elements that pass the condition with an array.

// //Array Reduce------
// const total = nums.reduce((p, c) => p + c, 0);
// console.log(total);


//JS Class
// class Friend {
//     constructor(name, aim, catagory) {
//         this.Name = name;
//         this.Vision = aim;
//         this.Type = catagory;
//     }
//     activity(name) {
//         return name + ' is working hard'
//     }
// }
// const najmul = new Friend('Najmul', 'Higher Study', 'Best');
// console.log(najmul);
// const saad = new Friend('Saad', 'IT Guy', 'Best');
// console.log(saad);

// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter(n => n % 2);
// console.log(output);

// function min(nums) { return Math.min(nums) }
// console.log(min(...[1, 3, 2]));

// const cube = x => x * x * x;
// console.log(cube(2))

// const { x, y, z } = { x: 1, y1: 2, z: 3 };
// console.log(y);


/*         practice from Github          */
// -----------------------------------------------------------
// task -1: console log the secondary school location of Sophia
// let data = {
//     Sophia: {
//         id: 33,
//         study: [
//             {
//                 primary:
//                     [
//                         { school_name: "ABC primary school" },
//                         { location: "Peters burg" }
//                     ]
//             },
//             {
//                 secondary:
//                     [
//                         { school_name: "ABC secondary school" },
//                         { location: "St Lorence" }
//                     ]
//             },
//         ]
//     }
// }
// console.log(data.Sophia.study[1].secondary[1].location);

// // task-2: console .log  output: Petersburg, Herry

// let students = {
//     2222: {
//         name: "Jack",
//         section: "C",
//         class: "IX",
//         address: {
//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }
//     },
//     3333: {
//         name: "Herry",
//         section: "D",
//         class: "X",
//         address: {
//             "building no": 85,
//             "street": "DC road",
//             "city": "Kachukhet",
//             "country": "Bangladesh"
//         }
//     }
// }
// console.log(students[2222].address['city'], students[3333].name);

// // task-3 : access and then show habluder adda
// // show output Beginner
// let data2 = {
//     data:
//         [
//             {
//                 bookId: 1,
//                 bookDetails: {
//                     name: "habluder adda",
//                     category: "XYZ",
//                     price: "20$",
//                 },
//                 bookCategory: "Basic",
//             },
//             {
//                 bookId: 2,
//                 bookDetails: {
//                     name: "gobluder adda",
//                     category: "ABC",
//                     price: "40$",
//                 },
//                 bookCategory: "Beginner",
//             }
//         ]
// }
// console.log(data2.data[0].bookDetails.name, data2.data[1].bookCategory);


/*         practice map,filter,find          */
// -----------------------------------------------------------
// // task 1
// const oddArray = [1, 3, 5, 7, 9];
// const forEvenArray = [];
// for (let i = 0; i < oddArray.length; i++) {
//     forEvenArray.push(oddArray[i] + 1)
// }
// console.log(forEvenArray);
// console.log(oddArray.map(i => i + 1));

// // task 2
// const numArray = [33, 50, 79, 78, 90, 101, 30];
// numArray.length = 0
// console.log(numArray);
// console.log(numArray.filter(i => i % 10 === 0));
// console.log(numArray.find(i => i % 10 === 0));

// // task 3
// const instructor = [
//     { name: 'Nodi', age: 28, position: 'Senior' },
//     { name: 'Akil', age: 20, position: 'Junior' },
//     { name: 'Shobuj', age: 38, position: 'Senior' },
// ]
// const seior = instructor.filter(obj => obj.position === 'Senior');
// console.log(seior[0].name, seior[1].name);

/*         Reduce()          */
// -----------------------------------------------------------
// const people = [
//     { name: 'Meena', age: 20 },
//     { name: 'Rina', age: 15 },
//     { name: 'Suchorita', age: 22 },
// ]
// let totalAge = 0;
// for (let i = 0; i < people.length; i++) {
//     totalAge += people[i].age;
// }
// console.log(totalAge);
// const rTotalAge = people.reduce((sum, person) => sum + person.age, 0);
// console.log(rTotalAge);
