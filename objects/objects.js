const cliente = {
    nome:'joao',
    idade:32,
    cpf:'1234322221',
}

console.log(`O nome do cliente é ${cliente.nome} e sua idade é ${cliente.idade}`)
console.log(`Os 3 primeiros digitos do seu CPF são ${cliente.cpf.substring(0,3)}`)