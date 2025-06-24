// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


let score = 33

console.log(typeof score);
console.log(typeof(score)); // this written as a method (as it is in parenthesis)
// output = number


 score = "33"

console.log(typeof score);
console.log(typeof(score)); // this written as a method (as it is in parenthesis)
// output = string


 score="33abc" 
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
// this will give output=number;
console.log(valueInNumber);
// this will give output=NaN (not a number)

 score = null;
console.log(typeof valueInNumber);
// this will give output=number;
console.log(valueInNumber);
// this will give output=0

 score = undefined;
console.log(typeof valueInNumber);
// this will give output=number;
console.log(valueInNumber);
// this will give output=NaN;

 score = true;
console.log(typeof valueInNumber);
// this will give output=number;
console.log(valueInNumber);
// this will give output=1;

 score = "string";
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


/* 
he different outputs in JavaScript for "1"+ 2 + 2 versus 1 + 2 + "3" are due to JavaScript's type coercion rules and the left-to-right evaluation of the + operator.
Case 1: "1" + 2 + 2
"1" + 2: 
The first operation involves a string ("1") and a number (2). When the + operator is used with a string and a number, JavaScript performs string concatenation. The number 2 is coerced into the string "2", resulting in "12". 
"12" + 2: 
The result of the first operation ("12", which is a string) is then combined with the number 2. Again, string concatenation occurs, and the number 2 is coerced into the string "2", resulting in "122".
Output: "122" (a string)
Case 2: 1 + 2 + "3"
1 + 2: 
The first operation involves two numbers (1 and 2). When the + operator is used with two numbers, JavaScript performs arithmetic addition. The result is 3. 
3 + "3": 
The result of the first operation (3, which is a number) is then combined with the string "3". Now, string concatenation takes precedence, and the number 3 is coerced into the string "3", resulting in "33".
Output: "33" (a string)
In summary:
The key difference lies in the order of operations and the data types involved in the initial + operations. When a string is encountered first in a sequence of +operations, subsequent numbers are coerced to strings and concatenated. When numbers are encountered first, arithmetic addition occurs until a string is introduced, at which point concatenation begins.
*/
