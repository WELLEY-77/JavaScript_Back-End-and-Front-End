const imoveis = []

let opcao = ''

do {
    opcao = prompt(
        'Quantidade de imoveis: '+ imoveis.length + '\n'+
        'Escolha uma opção: \n'+
        '[1] - Salvar um novo imovel\n'+
        '[2] - Mostrar todos os imoveis\n'+
        '[3] - Sair\n' 
    )

    switch (opcao) {
        case '1':
            let name = prompt('Nome do propietario')
            let quantidadeQuarto = parseFloat(prompt('Quantos quartos possui? '))
            let quantidadeBanheiro = parseFloat(prompt('Quantos banheiros possui? '))
            let possuiGaragem = prompt('Possui garagem? S/N')
            let info = {name, quantidadeBanheiro, quantidadeQuarto, possuiGaragem}
            imoveis.push(info)
            break
        case '2':
            for (let i = 0; i < imoveis.length; i++ ) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].name +
                    "\nQuartos: " + imoveis[i].quantidadeQuarto +
                    "\nBanheiros: " + imoveis[i].quantidadeBanheiro +
                    "\nPossui Garagem? " + imoveis[i].possuiGaragem
                  )
            }
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção invalida!')
    }

}while(opcao !== '3')
