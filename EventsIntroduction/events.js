var event = require('events');

var eventEmitter = new event.EventEmitter();

eventEmitter.on('customEvent',function(){
    console.log('event fired');
});

eventEmitter.emit('customEvent');
setTimeout(function(){
    eventEmitter.emit('customEvent');
}, 5000);