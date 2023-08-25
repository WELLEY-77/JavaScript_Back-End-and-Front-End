const resultado = prompt('Escolha um item: \na) \nb) \nc)')

switch (resultado) {
    case 'a':
        alert('O resultado é A ')
        break
    case 'b':
        alert('O resultado é B')
        break
    case 'c':
        alert('O resultado é C')
        break
    default:
        alert('Padrao')
}