opcao = '5'

do {
    opcao = prompt(
        'Escolha uma opção: \n' +
        '\nOpção 1 ' +
        '\nOpção 2 ' +
        '\nOpção 3 ' +
        '\nOpção 4 ' +
        '\nOpção 5 ' 
    )

    switch (opcao) {
        case '1':
            alert('Voçê escolheu a opção 1')
            break
        case '2':
            alert('Você escolheu a opção 2')
            break
        case '3':
            alert('Você escolheu a opção 3')
            break
        case '4':
            alert('Você escolheu a opção 4')
            break
        case '5':
            alert('Você escolheu a opção 5')
            alert('Encerrando')
            break
        default:
            alert('Opção invalida')
            
    }

} while(opcao !== '5')