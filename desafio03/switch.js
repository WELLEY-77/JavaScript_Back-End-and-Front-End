const valor = parseFloat(prompt('Digite um valor: '))
const valor2 = parseFloat(prompt('Digite outro valor: '))

const resul = prompt(
    '\n[1] - Adição' +
    '\n[2] - Subtrção' +
    '\n[3] - Divisão' +
    '\n[4] - Multiplicação'
)

switch (resul) {
    case '1':
        alert('A soma é: ' + (valor + valor2))
        break
    case '2':
        alert('A Sub é: ' + (valor - valor2))
        break
    case '3':
        alert('A Div é: ' + (valor / valor2))
        break
    case '4':
        alert('A Mult é: ' + (valor * valor2))
        break
    default:
        alert('Valor invalido')
}