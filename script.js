var matrix = [];
var socket = io();

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

function drawMatrix(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill('yellow');
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill('blue');
            }
            else if (matrix[y][x] == 4) {
                fill("red");
            }
            else if (matrix[y][x] == 5) {
                fill("#f600ff");
            }

            rect(x * side, y * side, side, side)

            fill("blue")
        }
    }

}

socket.on('matrix', drawMatrix);
