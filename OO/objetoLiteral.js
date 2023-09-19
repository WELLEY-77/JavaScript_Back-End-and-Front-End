const pessoa = {
    nome:'Joao',
    idade:25,
    email:'joao@xpto.com',
    exibirIfors: function() {
        console.log(this.nome, this.email, this.idade)
    }
}

const exibir = function() {
    console.log(this.nome)
}

const exibirNome = exibir.bind(pessoa)
exibirNome()
exibir()