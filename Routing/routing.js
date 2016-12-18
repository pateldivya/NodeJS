var express = require('express');

var app = express();
var router = express.Router();

app.use('/users', router);

router.get('/:username/:fname' , function(request,response){
    response.end(JSON.stringify(request.params));
});

app.listen(800, function(){
    console.log('started server');
});