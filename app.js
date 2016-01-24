var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 3000;
app.listen(port);


console.log("server running on " + port);