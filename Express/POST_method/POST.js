var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/', function(request, response){
    response.sendFile('file.html', {root:path.join(__dirname)});
    
});

app.post('/', function(request, response){
    response.end(JSON.stringify(request.body));
});

app.listen(800, function(){
    console.log("Listening to port");
}); 
