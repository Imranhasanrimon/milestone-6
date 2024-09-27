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