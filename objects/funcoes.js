const cliente = {
    nome: 'joao',
    idade: 23,
    email: 'joao@gmail.com',
    telefone: ['1234523412', '123124567'],
    saldo: 200,
    efetuaPagamento:function(valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente!');
        }else {
            this.saldo -= valor;
            console.log(`Saldo atualizado. Seu novo saldo é ${this.saldo}`)
        }
    },
}

cliente.efetuaPagamento(25);
cliente.efetuaPagamento(25);
