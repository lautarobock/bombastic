
var util = require('util');

module.exports = function(sensors) {
    var sources = {};

    if ( util.isArray(sensors) ) {
        sensors.forEach(function(sensor, i) {
            sources[i.toString()] = sensor;
        });
    } else if ( sensors.type === 'Sensor' ) {
        sources = {'0':sensors};
    } else {
        sources = sensors;
    }
    this.get = function(key) {
        return sources[key.toString()].get();
    };
}
