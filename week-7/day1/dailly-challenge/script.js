 const mod = require('./main.js')
 const http = require('http')
 const b = 5

 console.log(mod + b)

 const server = http.createServer((request, response)=>{
	response.end("heyyy backend")
	response.setHeader("Content-Type", "text/html");
	response.writeHead(200);
	response.end(`<html><body><h1>This is HTML from front-end</h1></body></html>`);
})
server.listen(3000)

 


