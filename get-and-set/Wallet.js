class Wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100
    }

    get amount() {
        return this.#amount / 100
    }

    get username() {
        return this.#username
    }

    set username(newUsername) {
        if (typeof newUsername === 'string') {
            this.#username = this.#username
        }else {
            console.log('not string')
        }
    }
}

const myWallet = new Wallet()
console.log(myWallet.amount)