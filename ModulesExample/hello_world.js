//module.exports = exports = {};

//var functions = module.exports = {};
//var value = module.exports = 2;

//module.exports = {
  //   value : 2
//}
/*functions.summation = function()
{
    return value;
}*/
//module.exports.data = functions;
function construct(){
    //var nameHolder = 'Divya';
     //var nameHolder = 'Divya';
    return {

        nameHolder : 'Divya',
        name: function(){
            //nameHolder = fname + ' ' + lname;
            console.log(nameHolder);
        }
    }
}
module.exports = construct ; 