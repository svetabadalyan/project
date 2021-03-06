var LivingCreature = require("./class_LivingCreature.js");

module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
    }



    mult() {
        //բոլոր եղանակներին, բացի ձմեռվանից, այն կբազմանա
        if (weather != "winter") {
            var datark = this.chooseCell(0);
            var empty = datark[Math.floor(Math.random() * datark.length)];
            this.multiply++;

            if (empty && this.multiply > 4) {
                var newX = empty[0];
                var newY = empty[1];
                matrix[newY][newX] = 1;
                var newGr = new Grass(newX, newY);
                grassArr.push(newGr);
                this.multiply = 0;
                grass_s++;
            }
        }
        
        //երբ անձրևային է, ավելի արագ կբազմանան
        if (weather == "rain") {
            var datark = this.chooseCell(0);
            var empty = datark[Math.floor(Math.random() * datark.length)];
            this.multiply = this.multiply + 2;

            if (empty && this.multiply > 3) {
                var newX = empty[0];
                var newY = empty[1];
                matrix[newY][newX] = 1;
                var newGr = new Grass(newX, newY);
                grassArr.push(newGr);
                this.multiply = 0;
                grass_s++;
            }
        }

    }
}