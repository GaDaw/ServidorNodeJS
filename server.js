var http = require('http');
var fs = require("fs");
var visitas = 0;
http.createServer(function(request, response) {

	if(request.url === "/"){
   		fs.readFile("index.html", function (err, data) {
      	response.writeHead(200, {'Content-Type': 'text/html'});
      	response.write(data);
         visitas+=1;
      	response.end();
   	});
	}
	else if(request.url === "/generic"){
   		fs.readFile("generic.html", function (err, data) {
      	response.writeHead(200, {'Content-Type': 'text/html'});
      	response.write(data);
         visitas+=1;
      	response.end();
   	});
	}
	else if(request.url === "/elements"){
   		fs.readFile("elements.html", function (err, data) {
      	response.writeHead(200, {'Content-Type': 'text/html'});
      	response.write(data);
         visitas+=1;
      	response.end();
   	});
	}
	else{
  		response.writeHead(200, {'Content-Type': 'text/html'});
   		response.write("404, Page not Found!");
   		response.end();
}
fs.writeFileSync("Visitas.txt", visitas);
}).listen(8080);

