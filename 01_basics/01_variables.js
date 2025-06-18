const accountId = 12345
let accountEmail = "hardiksethia13@gmail.com"
var accountPassword = "12345"
accountCity="jaipur"

// accountId=2 // not allowed

accountEmail="h13@gmail.com"
accountPassword="67890"
accountCity="bangalore"
let accountState;   // output will be undefined as no value given

/*
prefer not use var
because of issue in block scope and functional scope, as it does adhere to the scope


also js is so safe language that many times u can use names without variables declaration example: accountCity.
but is not prefered

most prefered: let
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
// will give output in tabular manner






