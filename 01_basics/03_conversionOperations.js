// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


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


// **********************operations********************

let value = 3
let negValue = -value
console.log(negValue);
// output= -3;
console.log(2**2);
// output = 2 raise to the power 2;

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1= "hardik";
let str2= " hello";
let str3= str1+str2;
console.log(str3);
// output = hardik hello;

console.log("1" + 2);
// output=12;
console.log(1 + "2");
// output=12;
 console.log("1" + 2 + 2);
 // output=122;
console.log(1 + 2 + "2");
// output=32;
// for above read about operator precedance;

console.log(true);
// output=true;
 console.log(+true);
 // output=1;
console.log(+"");
// output=0;
// console.log(true+); will give error


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
//output =101;
 // prefix and postix ++ concept ;


 // link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



