var matrix = [];
var socket = io();
var winter_s = document.getElementById('winter');
var spring_s = document.getElementById('spring');
var summer_s = document.getElementById('summer');
var autumn_s = document.getElementById('autumn');


function changeWeather(weather) {
    socket.emit("weather", weather);
}


for (i = 0; i < 40; i++) {
    matrix[i] = [];
    for (a = 0; a < 40; a++) {
        matrix[i][a] = Math.round(Math.random() * 5)
    }
}

var side = 20;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var amenakerArr = [];
var wizardArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function drawMatrix(arr) {
    var matrix = arr[0];
    var we = arr[1];
    //console.log(we);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                //ամեն եղանակին տարբեր գույն կունենա
                if (we == "spring") {
                    fill("lightgreen");
                }
                else if (we == "snow") {
                    fill("white");
                }
                else if (we == "rain" || we == "autumn") {
                    fill("#135921");
                }
                if (we == "summer") {
                    fill('#30ff59');
                }
                else {
                    fill("green");
                }
            }
            else if (matrix[y][x] == 2) {
                if (we == "spring") {
                    fill("#fff8a3");
                }
                else {
                    fill("yellow");
                }
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                if (we == "autumn" || we == "rain") {
                    fill('black');
                }
                else {
                    fill('blue');
                }
            }
            else if (matrix[y][x] == 4) {
                if (we == "autumn" || we == "rain") {
                    fill('#7f1111');
                }
                else {
                    fill("red");
                }
            }
            else if (matrix[y][x] == 5) {
                if (we == "summer") {
                    fill('#8d30ff');
                }
                else {
                    fill("#f600ff");
                }
            }

            rect(x * side, y * side, side, side)

        }
    }

}

socket.on('matrix', drawMatrix);
