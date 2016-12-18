var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.listen(800, function(){
    console.log("Listening to port");
});

app.get('/', function(request, response){
    response.sendFile('file.html', {root: path.join(__dirname)});
});

app.get(/^(.+)$/, function(request, response){
    try{
        if(fs.statSync(path.join(__dirname, request.params[0]+ '.txt')).isFile()){
            response.sendFile(request.params[0] + '.txt', {root: path.join(__dirname)});
        }
    }
    catch(error){
        console.log('error');
        response.send("no such file");

    }
})