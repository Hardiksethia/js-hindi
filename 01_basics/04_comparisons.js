console.log(2>1);  //true
console.log(2>=1); // true
console.log(2<=1); // false
console.log(2<1);//false
console.log(2==1);// false
console.log(2!=1);// true


console.log("2">1); // true
console.log("02">1); // true

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true
 // the reason is that an equality check  == and comparisons >< >= <= work differently is.
 // comparisons convert null to a number,  treating it as a 0.
 // that's why (14) null >=0 is true and (12) null >0 is false.

console.log(undefined == 0);// false
console.log(undefined > 0);// false
console.log(undefined < 0);// false 

// === , // it checks strictly datatype also, conversion not happens

console.log("2"==2); // true , // because conversion happens
console.log("2"===2); // false 



