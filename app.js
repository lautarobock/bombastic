var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.get('/pepe', function(req, res) {
    res.send('Temperature');
});


app.listen(3000);
// var server = http.createServer(app).listen(app.get('port'), function(){
//     // log.info('Express server listening on port ' + app.get('port'));
//   console.log('Express server listening on port ' + app.get('port'));
// });
