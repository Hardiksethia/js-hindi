// singleton // we get it when we create using object constructor
// Object.create

// object literals 

// Object Literal: Naturally supports Singleton pattern by creating a single instance and providing global access through a closure. It’s a straightforward approach for ensuring only one instance.

// Constructor: By default, allows the creation of multiple instances. To implement Singleton behavior with a constructor, additional logic is needed to ensure only one instance is created and managed.

// Thus, while object literals inherently create a single instance, constructors require extra steps to achieve the same Singleton behavior

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());