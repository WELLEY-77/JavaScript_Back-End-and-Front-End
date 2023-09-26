class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (this.email == email && this.password == password) {
            console.log('Login efetuado com sucesso')
        }else {
            console.log('Não foi possivel efetuar o login')
        }
    }
}

const user = new User('jao','lelel@gmaill.com', 'wewewe')
user.login('lelel@gmaill.com', 'wewewe') 
// console.log(user)