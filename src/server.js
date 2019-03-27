const http = require("http");
const server = http.createServer();
server.listen(6666, function(){
    console.log("Server is listening on port 6666!!!")
})