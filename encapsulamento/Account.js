class Account {

    #password
    #balance 

    constructor(user) {
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email, password) {
        if(this.#authenticate(email, password)) {
            return this.#balance
        }else {
            return console.error('Error :(')
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }

}

const user = {
    email:"jao@xpto.com",
    password:"123456"
}

const primary = new Account(user)

console.log(primary.getBalance("jao@xpto.com", "123456"))