describe('reader.js', function() {

    it('Should read temperature from one sensor', function() {
        var Sensor = require('../sensor.js');
        var Reader = require('../reader.js');
        var reader = new Reader(new Sensor('./etc/mock1'));

        expect(reader.get(0)).toBe(20);
    });

    it('Should read temperature from two sensors', function() {
        var Sensor = require('../sensor.js');
        var Reader = require('../reader.js');
        var reader = new Reader([
            new Sensor('./etc/mock1'),
            new Sensor('./etc/mock2')
        ]);

        expect(reader.get(0)).toBe(20);
        expect(reader.get(1)).toBe(18);
    });

    it('Should read temperature from two named sensors', function() {
        var Sensor = require('../sensor.js');
        var Reader = require('../reader.js');
        var reader = new Reader({
            'ipa': new Sensor('./etc/mock1'),
            'pale': new Sensor('./etc/mock2')
        });

        expect(reader.get('ipa')).toBe(20);
        expect(reader.get('pale')).toBe(18);
    });
});
