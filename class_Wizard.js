var LivingCreature = require("./class_LivingCreature.js");
var Grass = require("./class_Grass.js");
var Xotaker = require("./class_Xotaker.js");
var Gishatich = require("./class_Gishatich.js");
var Amenaker = require("./class_Amenaker.js");

module.exports = class Wizard extends LivingCreature {
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

    move() {
        var datark = this.chooseCell(0);
        var empty = datark[Math.floor(Math.random() * datark.length)];
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }
    }

    Create() {
        //բոլոր եղանակներին, բացի ձմեռվանից, այն նոր կեչպարներ կստեղծի
        if(we != "winter"){
            var datark = this.chooseCell(0);
            var stextsvox = datark[Math.floor(Math.random() * datark.length)];
            if (stextsvox) {
                var newX = stextsvox[0];
                var newY = stextsvox[1];
                matrix[newY][newX] = Math.round(Math.random() * 3 + 1);
    
                if (matrix[newY][newX] == 1) {
                    var gr = new Grass(newX, newY)
                    grassArr.push(gr);
    
                }
                else if (matrix[newY][newX] == 2) {
                    var xk = new Xotaker(newX, newY)
                    xotakerArr.push(xk);
                }
                else if (matrix[newY][newX] == 3) {
                    var gish = new Gishatich(newX, newY)
                    gishatichArr.push(gish);
                }
                else if (matrix[newY][newX] == 4) {
                    var ak = new Amenaker(newX, newY)
                    amenakerArr.push(ak);
                }
    
            }
        }
        

        
    }
}