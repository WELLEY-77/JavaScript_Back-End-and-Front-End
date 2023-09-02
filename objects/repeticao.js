const cliente = {
    nome: 'joao',
    idade: 23,
    email: 'joao@gmail.com',
    telefone: ['1234523412', '123124567'],
}


cliente.endereco = {
    numero:123,
    complemento:'ap 88',
    apartamento:true,
}


for (let chave in cliente) {

    const tipo = typeof(cliente[chave])

    if (tipo != 'object' && tipo != 'function') {
        console.log(` O campo ${chave} tem o valor ${cliente[chave]} `)
    }

}