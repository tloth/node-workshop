const http = require("http");

const message = "goodie goodie";
function handler(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(message);
    response.end();
}

const server = http.createServer(handler);
server.listen(9999, function(){
    console.log("Server is listening on port 9999!!!")
})