"use strict"; // treat all js code as newer version

// alert(3 + 3) // we are using nodejs this will not give 6 , as we are not using browser, in browser it will popup 6

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")

// use mdn documentation
// u can also use original documentation tc39


let name="hardik"
let age= 18
let isLoggedIn=false

// number => 2 to power either 53/52
// bigint (for big numbers)
// string => ""
// boolean => true/false
// null => standalone value (special datatype), representation of empty value
// undefined => value not assigned

let state=null 
let state // undefined 

// symbol => unique

// all above these were primitive datatypes

// object, In JavaScript, an object is a non-primitive data type.

console.log(typeof "hardik");
console.log(typeof age);
console.log(typeof null) // gives output =object
// In JavaScript, null is a primitive value, not an object. It represents the intentional absence of any object value.
// The confusion often arises because the typeof operator returns "object" when applied to null. This is a long-standing, well-known bug in JavaScript that has been preserved for historical reasons to avoid breaking existing web content.

console.log(typeof undefined); // this will give output=undefined

