var Sensor = require('./sensor.js');
var Reader = require('./reader.js');

var sensors = [];

for ( var i=2; i<process.argv.length; i++ ) {
    sensors.push(new Sensor(process.argv[i]));
}

var reader = new Reader(sensors);

setInterval(function() {
    for ( var i=0;i<sensors.length; i++ ) {
        console.log('Sensor', i, reader.get(i));
    }
},1000);
