var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

matrix = [];

for (i = 0; i < 40; i++) {
    matrix[i] = [];
    for (a = 0; a < 40; a++) {
        matrix[i][a] = Math.round(Math.random() * 5)
    }
}

var LivingCreature = require("./class_LivingCreature.js");
var Grass = require("./class_Grass.js");
var Xotaker = require("./class_Xotaker.js");
var Gishatich = require("./class_Gishatich.js");
var Amenaker = require("./class_Amenaker.js");
var Wizard = require("./class_Wizard.js");
var fs = require("fs");


grassArr = [];
xotakerArr = [];
gishatichArr = [];
amenakerArr = [];
wizardArr = [];


grass_s = 0;
xotaker_s = 0;
gishatich_s = 0;
amenaker_s = 0;
xotaker_kerav = 0;
gishatich_kerav = 0;
amenaker_kerav = 0;
weather = "";


for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y);
            xotakerArr.push(xt);
        }
        else if (matrix[y][x] == 3) {
            var gish = new Gishatich(x, y);
            gishatichArr.push(gish);
        }
        else if (matrix[y][x] == 4) {
            var amenaker = new Amenaker(x, y);
            amenakerArr.push(amenaker);
        }
        else if (matrix[y][x] == 5) {
            var wizard = new Wizard(x, y);
            wizardArr.push(wizard);
        }


    }
}

io.on('connection', function (socket) {
    socket.on("weather", function (w) {
        weather = w;
        //console.log(weather);
    })
});

setInterval(drawServerayin, 1000);


function drawServerayin() {
    for (var p in grassArr) {
        grassArr[p].mult();
    }
    for (var p in xotakerArr) {
        xotakerArr[p].eat();
        xotakerArr[p].move();
        xotakerArr[p].mult();
        xotakerArr[p].die();
    }
    for (var p in gishatichArr) {
        gishatichArr[p].eat();
        gishatichArr[p].move();
        gishatichArr[p].mult();
        gishatichArr[p].die();
    }
    for (var p in amenakerArr) {
        amenakerArr[p].eatXotaker();
        amenakerArr[p].eatGishatich();
        amenakerArr[p].move();
        amenakerArr[p].mult();
        amenakerArr[p].die();
    }
    for (var p in wizardArr) {
        wizardArr[p].Create();
        wizardArr[p].move();
    }
    //console.log(matrix);
    io.sockets.emit('matrix', [matrix, weather]);
}

var obj = {"info": []}
function main (){
    var file = 'statistics.json';
    obj.info.push({"Grass haytnvel": grass_s,"Gishatich haytnvel": gishatich_s, "Xotaker haytnvel": xotaker_s, "Amenaker Haytnvel": amenaker_s, "xotakery kerav": xotaker_kerav,"gishatich kerav": gishatich_kerav, "amenaker kerav": amenaker_kerav })
    fs.writeFileSync(file, JSON.stringify(obj));
}
setInterval(main, 1000);
