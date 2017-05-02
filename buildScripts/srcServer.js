var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/', express.static(path.join(__dirname, '../')));

app.get('/user', function(req, res){
    res.json([
        {"accountId": "12576534534656768", "firstName": "Joe", "lastName": "Soap", "Balance": 0.00}
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);//eslint-disable-line no-console
    } else {
        open('http://localhost:' + port);
    }
});

