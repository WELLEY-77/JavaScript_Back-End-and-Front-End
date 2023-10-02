class Character {
    constructor(nome, pataque, pdefesa, pvida) {
        this.nome = nome
        this.pvida = pvida
        this.pataque = pataque
        this.pdefesa = pdefesa
    }

    atacar(targetCharacter) {
        targetCharacter.pvida -= this.pataque - targetCharacter.pdefesa
    }
}

module.exports = Character

