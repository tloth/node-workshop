const http = require("http");
const fs = require("fs");

const message = "goodie goodie";
function handler(request, response){
    const method = request.method;
    console.log(method);

    const endpoint = request.url;
    console.log(endpoint);

    if (endpoint === "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile(__dirname + "/../public/index.html", function(error, file) {
            if (error) {
                console.log(error);
                return;
// What are we returning here?
            };
        response.end(file);
        })
    } else if (endpoint === "/node") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("It's the node!");
        response.end();
    } else if (endpoint === "/girls") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("It's the girls!!!");
        response.end();
    } else {    
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(message);
        response.end();
    }
}

const server = http.createServer(handler);
server.listen(9999, function(){
    console.log("Server is listening on port 9999!!!")
})