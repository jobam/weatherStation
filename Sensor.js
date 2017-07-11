var exec = require('child_process').exec;
var child;

//==========Globals=============
var _AdaFruitScript = "/home/pi/temp_scripts/Adafruit_DHT 22 4"
var _temp = "";
var _humidity = "";
var _dataString = "";

//getting datas
while (dataString.search("Temp") == -1) {

    // executes command to get data
    child = exec('sudo ' + _AdaFruitScript, function (error, stdout, stderr) {
        dataString = stdout;
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
    temp = dataString.substring(dataString.search("Temp") + 8 , dataString.search("Temp") + 10);
    humidity = dataString.substring(dataString.search("Hum") + 6 , dataString.search("Hum") + 8);
   //setTimeout(function2, 2000);
}