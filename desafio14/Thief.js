const Character = require("./Character");

class Thief extends Character {
    atacar(targetCharacter) {
        targetCharacter.pvida -= (this.pataque - this.pdefesa) * 2
    }
}

module.exports = Thief
