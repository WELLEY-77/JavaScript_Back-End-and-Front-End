const user = {
    nome:'Joao',
    idade:25,
    email:'joao@xpto.com',
    exibirIfors: function() {
        console.log(this.nome, this.email, this.idade)
    }
}

const admin = {
    nome:'admin',
    idade:25,
    email:'admin@xpto.com',
    criarCurso() {
        console.log('Curso criado')
    }
}

Object.setPrototypeOf(admin, user)
admin.exibirIfors()
admin.criarCurso()

// const exibir = function() {
//     console.log(this.nome)
// }

// const exibirNome = exibir.bind(pessoa)
// exibirNome()
// exibir()