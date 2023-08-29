const nomes = ['joao', 'pedro', 'toto', 'mari']

nomes.forEach((nome) => {
    console.log(nome)
})

function imprimeNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome)