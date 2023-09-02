const cliente = {
    nome: 'joao',
    idade: 23,
    email: 'joao@gmail.com',
    telefone: ['1234523412', '123124567'],
}

// cliente.endereco = {
//     numero:123,
//     complemento:'ap 88',
//     apartamento:true,
// }

const chaveDosObjetos = Object.keys(cliente)

if (! chaveDosObjetos.includes('endereco')) {
    console.error('Erro. E necessario ter um endereço cadastrado.')
}


