saldo = parseFloat(prompt('Informe seu saldo: '))

do {
    opcao = prompt(
        '\nSeu saldo é: ' + saldo +
        '\nEscolha uma opção' +
        '\n[1] - Adicionar dinheiro' +
        '\n[2] - Diminuir dinheiro' +
        '\n[3] - Sair ' 
    )

    switch (opcao){
        case '1':
            saldo += parseFloat(prompt('Qual valor deseja adicionar: '))
            break
        case '2':
            saldo -= parseFloat(prompt('Qual valor deseja diminuir: '))
            break
        case '3':
            alert('Encerrando...')
            break
    }

} while(opcao !== '3')