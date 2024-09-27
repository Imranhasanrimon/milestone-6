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