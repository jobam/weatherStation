var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//sensor
var sensor = require("./Sensor.js");


app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})


server.listen(8080);

console.log("server is listening on port 8080");


//===============SOCKETS============================

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (client) {
    console.log('Un client est connecté !');
    getData();
});


//================Get Data=================
var t = setInterval(function () {
    getData();
}, 3000);

function getData() {

    console.log("getting new Data");
    var result = sensor.getData();
    console.log("New data temp: " + result.temp + " hum: " + result.humidity);

    console.log("broadcasting result");
    io.sockets.emit("tempreture", result.temp);
    io.sockets.emit("humidity", result.humidity);

}