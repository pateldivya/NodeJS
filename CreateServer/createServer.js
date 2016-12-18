var server = require('http');
var print = require('./hello_world.js');

server.createServer(function1).listen(800, function(){
    console.log("sever called function");
});

function function1(request, response){
    //response.end("Helllo Google");
    
    response.writeHead(200, {'content' : 'text/palin'});
    response.end("bye....Request from page: " + request.url);
    
    

}