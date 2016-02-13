
console.log(process.argv);

var Sensor = require('./sensor.js');
var Reader = require('./reader.js');

var reader = new Reader([
    new Sensor('./etc/mock1'),
    new Sensor('./etc/mock2')
]);

setInterval(function() {
    console.log('0', reader.get(0));
    console.log('1', reader.get(1));
},1000);
