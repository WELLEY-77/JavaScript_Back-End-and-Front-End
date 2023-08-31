const cliente = {
    nome:'joao',
    idade:32,
    cpf:'1234322221',
}

console.log(`O nome do cliente é ${cliente['nome']} e sua idade é ${cliente['idade']}`)

const chaves = ['nome', 'idade', 'cpf']

chaves.forEach( (chave, i) => {
    console.log(`O campo ${chave} ta na posição ${cliente[chave]} `)
} );
