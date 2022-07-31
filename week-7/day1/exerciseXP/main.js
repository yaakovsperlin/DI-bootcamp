

let a = 5;
let b = 10;
let x;
let c = 6;
x = a + b
console.log(`first run ${x}`)

const http = require('http');


const server = http.createServer((request, response)=>{
	response.end(`first run ${x}`)
})
server.listen(5003)

// let name = "joe1"
// const ageUser = (param) =>{
// 	console.log(`hello ${param} you are ${a+b}`)
// }
// console.log(ageUser(name))















