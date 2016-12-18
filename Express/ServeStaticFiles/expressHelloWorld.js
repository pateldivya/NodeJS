var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

console.log(__dirname);
app.use(bodyParser());

app.use('/cssFiles', express.static(__dirname + '/assets' ));

app.listen(800, function(){
    console.log("Listening to port");
});

app.get('/',function(request, response){
    //response.end(JSON.stringify(request.query));
    response.sendFile('file.html', {root: path.join(__dirname)});

});
app.post('/', function(request, response){
    response.end(JSON.stringify(request.body));
});