var express = require('express');
var path = require('path');
var app = express();



app.get('/', function(request, response){
    var rsp = "Hello! " + request.query.firstName ;
    response.end(rsp);
});

app.listen(800, function(){
    console.log("Listening to port");
}); 
