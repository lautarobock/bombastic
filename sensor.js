
var fs = require('fs');

module.exports = function(path) {

    this.type = 'Sensor';
    
    this.get = function() {
        return parseFloat(fs.readFileSync(path));
    };
};
