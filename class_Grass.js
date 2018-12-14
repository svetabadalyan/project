var LivingCreature = require("./class_LivingCreature.js");

module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
    }

    
    
    mult() {
        var datark = this.chooseCell(0);
        var empty = datark[Math.floor(Math.random()*datark.length)];
        this.multiply++;

        if (empty && this.multiply > 3) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 1;
            var newGr = new Grass(newX, newY);
            grassArr.push(newGr);
            this.multiply = 0;
        }
    }
}