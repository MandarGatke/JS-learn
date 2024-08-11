let name = "Mandar"
let age = 21
//${name} gives value of variable and it should be used in backticks (``)
console.log(`Hello myname is ${name} and age is ${age}`);
//another way to declare strings as an object of string calss
let s = new String("Mandar Gatke     ")

// This declaraction has many properties such as length, indexing, ,etc and functions
// to know more function put the new declaration of string in browser and check all functions
console.log(s);
console.log(s.length);
console.log(s[2]);
console.log(s.__proto__);
console.log(s.toUpperCase());
console.log(s.charAt(2));
console.log(s.indexOf('r'));
console.log(s.substring(0, 4));
console.log(s.trim())
console.log(s.replace("dar", "123"));
console.log(s.includes("Man"));
console.log(s.split(' '));//returns array
console.log(s.split(' ', 2));// limit is how many parts of string are to be added in array