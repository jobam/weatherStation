//npm install sync-exec
var exec = require('sync-exec');
var child;

//==========Globals=============
var _AdaFruitScript = "./Adafruit.py"
var _temp = "";
var _humidity = "";
var _dataString = "";


function getData() {

    //getting datas
    while (_dataString.search("Temp") == -1) {

        // executes command to get data
        _dataString = exec("python Adafruit.py").stdout;
        _temp = parseInt(_dataString.substring(_dataString.search("Temp") + 5, _dataString.search("Temp") + 7));
        _humidity = parseInt(_dataString.substring(_dataString.search("Hum") + 4, _dataString.search("Hum") + 6));

        // _temp = _dataString.substring(_dataString.search("Temp") + 8, _dataString.search("Temp") + 10);
        // _humidity = _dataString.substring(_dataString.search("Hum") + 6, _dataString.search("Hum") + 8);
        //setTimeout(function2, 2000);
    }

    return {temp:_temp, humidity:_humidity};
}

exports.getData = getData;