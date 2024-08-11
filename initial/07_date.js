let dt = new Date()
console.log(dt);
console.log(dt.toDateString());
console.log(dt.toLocaleDateString());
console.log(dt.toLocaleString());
console.log(dt.toString());
console.log(dt.toTimeString());

let createdDt = new Date(2023, 0, 23);//months start from 0 in JS
createdDt = new Date(2023, 0, 23, 5, 3);
createdDt = new Date("2023-01-14");
createdDt = new Date("01-14-2023");
console.log(createdDt.toDateString());
console.log(Date.now())// give current time stramp in miliseconds
