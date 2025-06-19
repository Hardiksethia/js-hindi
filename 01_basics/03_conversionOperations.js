let score = 33

console.log(typeof score);
console.log(typeof(score)); // this written as a method (as it is in parenthesis)
// output = number


let score = "33"

console.log(typeof score);
console.log(typeof(score)); // this written as a method (as it is in parenthesis)
// output = string


let score="33abc"
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
// this will give output=number;
console.log(valueInNumber);
// this will give output=NaN (not a number)

let score = null;
console.log(typeof valueInNumber);
// this will give output=number;
console.log(valueInNumber);
// this will give output=0

let score = undefined;
console.log(typeof valueInNumber);
// this will give output=number;
console.log(valueInNumber);
// this will give output=NaN;

let score = true;
console.log(typeof valueInNumber);
// this will give output=number;
console.log(valueInNumber);
// this will give output=1;

let score = "string";
console.log(typeof valueInNumber);
// this will give output=number;
console.log(valueInNumber);
// this will give output=NaN;

// "33"=> 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1
let booleanisLoggedIn= Boolean(isLoggedIn);
console.log(booleanisLoggedIn);
// output will be true , for 0 it will be false
// for "" (empty string), it will be false ,
// for "hardik", it will be true;

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
// output=33;
console.log(typeof stringNumber);
// output=string;

