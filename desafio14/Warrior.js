const Character = require("./Character");

class Warrior extends Character {
    constructor(nome, pataque, pvida, pdefesa, shieldPts) {
        super(nome, pataque, pdefesa, pvida)
        this.shieldPts = shieldPts
        this.stance = 'Attacking'
    }

    atacar(targetCharacter) {
        if(this.stance === 'Attacking') {
            super.atacar(targetCharacter)
        }
    }

    switchStance() {
        if(this.stance === 'Attacking') {
            this.stance = 'Defense'
        }else {
            this.stance = 'Attacking'
            this.pdefesa -= this.shieldPts
        }
    }

}

module.exports = Warrior