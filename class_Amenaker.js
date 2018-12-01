class Amenaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;
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
        var empty = random(this.chooseCell(0));

        if (empty && this.energy > 10) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            var xt = new Amenaker(newX, newY);
            amenakerArr.push(xt);
            this.multiply = 0;
        }
    }
    move() {
        var empty = random(this.chooseCell(0));
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }
    }

    eatXotaker() {
        var food = random(this.chooseCell(2));
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 4;
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
    eatGishatich() {
        var food = random(this.chooseCell(3));
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1);
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
            for (var i in amenakerArr) {
                if (amenakerArr[i].x == this.x && amenakerArr[i].y == this.y) {
                    amenakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}