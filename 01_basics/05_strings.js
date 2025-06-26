const name = "hitesh" // strings can be written in double quotes and single quotes also
const repoCount = 50

// console.log(name + repoCount + " Value");   
// output=hitesh50 Value;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //  better syntax // string interpolation
// output= Hello my name is hitesh and my repo count is 50;

/*Best Practice:
Use String Interpolation for concatenating.
let rating = 'one'
`Chai aur code is number ${rating} channel`*/ // Chai aur code is number one channel

/* Old way:
Let a = name
Let b = age
let a = prompt("What is your name");
      let b = prompt("What is your age");
      document.write("My name is " + a + "and i am " + b + "years old")


New way:
let a = prompt("What is your name");
      let b = prompt("What is your age");
      document.write(`Hello my name is ${a} and I'm ${b} years old `);

We use ` ` to write complete string and will use ${} to inject variables in it.*/


/* template literal is making a string using `backticks` and string interpolations is embedding expression inside it using ${expression} is string interpolation. so `your marks are ${80+6}` is a template literal, yes but the act of embedding "${80+6}" in is called string interpolation,  doesnt matter if its embedding a var or an operation- theyre both gonna be called string interpolation */


const gameName = new String('hitesh-hc-com')  // syntax to declare string  
// use above syntax in browser console log to get prototype methods
// console.log(gameName[0]); //(key value pair)
// console.log(gameName.__proto__);
// go to browsers console log , u will find different strings prototype methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));



//const newString = gameName.substring(0, 4)
//console.log(newString); // output=hite // index 0 to 3 
// u cant give negative value to substring


//const anotherString = gameName.slice(-8, 4)
// console.log(anotherString); // output= ite 







/*In JavaScript, you cannot traverse from a higher negative index to a lower negative index using the slice() function or any other standard string method. The slice() function, as well as most other string methods, expects the start index to be less than the end index when using positive indices or zero-based indices.

When using negative indices, you can only traverse from left to right (from lower negative index to higher negative index) or from right to left (from lower positive index to higher positive index). You cannot reverse the start and end indices when using negative indices with slice().

const myString = "Hello, World!";
const slicedString = myString.slice(-1, -8);
console.log(slicedString); // Output: " "


const myString = "Hello, World!";
const slicedString = myString.slice(0, 5);
console.log(slicedString); // Output: "Hello"

const slicedStringNegative = myString.slice(-6, -1);
console.log(slicedStringNegative); // Output: "World" */




const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // output=hitesh


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
// output= %20 will be replaced by -

console.log(url.includes('sundar'))
// output= false

console.log(gameName.split('-'));
// output= ['hitesh', 'hc', 'com']
// a array of string




