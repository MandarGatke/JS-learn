let val = 3
let neg = -val
console.log(neg)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**2)
console.log(3%2)

let str1 = "hello"
let str2 = " Mandar"
let str3 = str1+str2
console.log(str3)

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") // 32

console.log(+true) // 1
console.log(+"") // 0


//**************Comparisions****************

console.log(2 > 1) // true
console.log("2" > 1) //true
console.log("02" > 1) //true

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log("2" === 2) // strice check, checks for both value and datatype to be equal

//symbole special uniqueness
const l = Symbol("123")
const n = Symbol("123")
console.log(l === n);
