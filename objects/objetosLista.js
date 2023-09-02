const cliente = {
    nome: 'joao',
    idade: 23,
    email: 'joao@gmail.com',
    telefone: ['1234523412', '123124567'],
}


cliente.enderecos = [
    {
        numero:123,
        complemento:'ap 88',
        apartamento:true,
    }
]

cliente.enderecos.push({numero:1234, complemento:'ap 99', apartamento:false,})
cliente.enderecos.push({numero:1234, complemento:'ap 99', apartamento:true,})
cliente.enderecos.push({numero:1234, complemento:'ap 99', apartamento:false,})

const apartamentoTrue = cliente.enderecos.filter( (endereco)=> {
    return endereco.apartamento === true
} )

console.log(apartamentoTrue)