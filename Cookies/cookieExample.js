var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(request, response){
    response.cookie('FirstCookie', 'looking good');
    response.end("Hello");
});
app.get('/remove', function(request, response){
    response.clearCookie('FirstCookie');
    response.end("Hello");
});
app.listen(800, function(request, response){
    console.log("Done");
})