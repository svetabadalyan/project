var matrix = [];

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

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function draw() {
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
}

