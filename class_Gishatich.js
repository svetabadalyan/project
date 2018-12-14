var LivingCreature = require("./class_LivingCreature.js");

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;

    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }
    mult() {
        var datark = this.chooseCell(0);
        var empty = datark[Math.floor(Math.random()*datark.length)];

        if (empty && this.energy > 10) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            var xt = new Gishatich(newX, newY);
            gishatichArr.push(xt);
            this.multiply = 0;
        }
    }
    move() {
        var datark = this.chooseCell(0);
        var empty = datark[Math.floor(Math.random()*datark.length)];
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }
    }

    eat() {
        var xotaker = this.chooseCell(2);
        var food= xotaker[Math.floor(Math.random()*xotaker.length)];
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1);
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}