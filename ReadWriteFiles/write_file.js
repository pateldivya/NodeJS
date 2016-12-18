var fs= require('fs');

var data = fs.writeFileSync('./file2','My name is Divya','utf8');
console.log("writing");

var read = fs.readFileSync('./file2', 'utf8');
console.log(read);
console.log('finish');