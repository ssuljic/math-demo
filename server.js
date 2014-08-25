var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));
app.listen(Number(process.env.PORT || 5000), function() { console.log('listening')});