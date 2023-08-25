let nome = prompt('Qual o seu nome? ')

let quantCidade = 0
const cidades = []
while (true){

    let visita = prompt('Ja visitou alguma cidade? s/n')

    if (visita === 's'){
        let nomeCidade = String(prompt('Qual o nome da cidade? '))
        cidades.push(nomeCidade)
        quantCidade += 1
    }else if(visita === 'n'){
        break 
    }   
}

alert('\nNome: '+nome + '\nQuantidade: '+ quantCidade + '\nCidades: '+cidades)

