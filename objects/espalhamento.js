const cliente = {
    nome: 'joao',
    idade: 23,
    email: 'joao@gmail.com',
    telefone: ['1234523412', '123124567'],
}

cliente.endereco = [
    {
        numero:123,
        complemento:'ap 88',
        apartamento:true,
    },
];

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0]
}

console.log(encomenda)