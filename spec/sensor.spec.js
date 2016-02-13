describe('sensor.js', function() {

    it('Should read sensor value for specific location', function() {
        var Sensor = require('../sensor.js');
        var sensor = new Sensor('./etc/mock1');
        expect(sensor.get()).toBe(20);
    });
});
