const accId = 12345
let accEmail = "mandar@gmail.com"
var accPass = "09876"
//prefer to use let not var as there is issue in block scope and function scope
accCity = "Mumbai"
let accState

// accId = 23 //Not allowed(as accId is const)
console.log(accId);
accEmail = "demo@gmail.com"
accPass = "12365"
accCity = "Pune"
console.table([accId, accEmail, accPass, accCity, accState]);