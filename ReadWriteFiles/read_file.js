var fs = require('fs');

console.log("hello");
var data = fs.readFileSync('./file.txt', 'utf8');
    console.log(data);

console.log("bye...");