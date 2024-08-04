let x = 33
console.log(typeof(x))
let y = "33"
console.log(typeof(y))
let z = Number(y)
console.log(typeof(z))
let a = "33abc"
console.log(typeof(a))
let b = Number(a)
console.log(typeof(b))
console.log(b)
//though the typr is changet to Number here but the value will become NaN as the sting "33abc" cannot be converted into a valid number
//if the value of variable is null the number converted will be 0
let c = null
console.log(typeof(c))
let d = Number(c)
console.log(typeof(d))
console.log(d)
//if the value of variable is undefined the number converted will be NaN
let e = undefined
console.log(typeof(e))
let f = Number(e)
console.log(typeof(f))
console.log(f)
// if the value of variable is boolean value will become 0 or 1
//1 => true; 0 => false
//"" => false
//"mandar" => true

