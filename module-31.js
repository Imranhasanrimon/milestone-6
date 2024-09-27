// Array Map-------
const nums = [2, 5, 3, 7, 50, 39, 13];
function dob(num) {
    // console.log(num);
    return num * 2;
}
// console.log(nums.map(dob));
// console.log(nums.map(n => n * 3));

//Array Filter------
console.log(nums.filter(n => n > 9));
console.log(nums.filter(n => n % 2 === 0));

//Array Find------
console.log(nums.find(n => n > 10)); // find will always give single first occurrence element that pass the condition. this is almost like filter but filter provides all elements that pass the condition with an array.