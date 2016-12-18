var express = require('express');

var app = express();

app.get('/', function(request, response){
    //response.cookie('FirstCookie', 'looking good');
    response.end("Hello Everyone");
});

app.listen(800, function(request, response){
    console.log("Done");
})