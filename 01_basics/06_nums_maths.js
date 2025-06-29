const score = 400
// console.log(score);
// output=400

const balance = new Number(100)
// console.log(balance);
// output=[Number: 100];
// use this in browser console log, u will get properties through protoype
/*[[Prototype]]:Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
[[Prototype]]: Object
[[PrimitiveValue]]: 0
[[PrimitiveValue]]: 100 */


// console.log(balance.toString().length);
// output =100 , typeof=string, now it can use string properties 

// console.log(balance.toFixed(2));
// output=100.00

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));
// output=124


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// output=10,00,000



/*
----- SUMMARY -----
Video 12 - Number and Maths in Javascript

const score = 400 // JS auto detects it as a number
const balance = new Number(100) // Using Number Function to explicitly define number in JS
console.log(score) // 400
console.log(balance) // [Number: 100]

Note: Number has comparatively less prototype properties (methods) than String

Methods with examples:
1. balance.toString() // This converts a number into string
2. balance.toString().length // Once we convert it to String, all properties / methods of Strings are now open to us, such as length
3. balance.toFixed(2) // Used to reduce or round of to specific decimal values
    - Use Cases 
        a. After calculation of GST
        b. In Ecommerce website

4. const otherNumber = 23.8966
    otherNumber.toPrecision(3) // Output - 23.9
    otherNumber = 123.8966
    otherNumber.toPrecision(3) // Output - 124    
    otherNumber = 1123.8966
    otherNumber.toPrecision(3) // Output - 1.12e+3 (exponential value)

5. const hundreds = 1000000
    hundreds.toLocalString() // By default it converts into US standards
    hundreds.toLocalString('en-IN') // As per Indian Standards
    (Note: Check other formats in MDN Docs)

6. Other methods
    .MAX_VALUE
    .MIN_VALUE
    .MAX_SAFE_INTEGER
    .MIN_SAFE_INTEGER

----- Maths in JS ----
Maths library comes along with JS

Methods ----
1. Math.abs() // Converts +ve / -ve integer values to positive
2. Math.round(4.3) // Output - 4
3. Math.round(4.6) // Output - 5
4. Math.ceil(4.2) // Output - 5 (gives top value)
5. Math.floor(4.9) // Output - 4 (gives bottom value)
6. Math.min(4,3,6,8) // Output - 3
7. Math.max(4,3,6,8) // Output - 8
8. Math.random() // Gives random value between 0 & 1 in decimals

Math.random() tricks -----
Math.random()*10
Math.random()*10 + 1 // This assures that values are atleast 1 & more than 1
(Math.random()*10) + 1 // To avoid any BODMAS rule miscalculation

---- Trick to randomize value between range ----
const min = 10
const max = 20
const randomValue = Math.floor((Math.random() * (max - min + 1)) + min)
*/



// if min =10 and max=20 then the value (Math.floor(Math.random()*(max-min +1)) )  => ensure that it will give value in the range [0,10] ..You have said 1 is added to avoid 0 but basically 1 is added to increase the range upto (10) ..if we will not add 1 it will give value in the range [0,9]



// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));