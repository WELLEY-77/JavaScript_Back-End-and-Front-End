import { Character } from "./Character.js"

export class Mage extends Character {
    constructor(nome, pataque, pdefesa, magia) {
        super(nome, pataque, pdefesa)
        this.magia = magia
    }

    atacar(targetCharacter) {
        targetCharacter.pvida -= (this.pataque + this.pdefesa) - targetCharacter.pdefesa

    }

    curar(targetCharacter) {
        targetCharacter += this.magia * 2
    }

}

module.exports = Mage
