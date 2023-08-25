veiculo1 = window.prompt('Veiculo 1: ')
velocidade1 = Number(window.prompt('Velocidade: '))

veiculo2 = window.prompt('Veiculo 2: ')
velocidade2 = Number(window.prompt('Velocidade: '))

if (velocidade1 > velocidade2){
    alert('O ' + veiculo1 + ' é mais rapido do que o (a) ' + veiculo2)
}else if (velocidade1 == velocidade2) {
    alert('As velocidades são iguais')
}