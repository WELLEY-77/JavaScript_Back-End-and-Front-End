number = parseFloat(prompt('Digite um numero entre 1 e 20. '))

resultado = ''

for (let fator = 1; fator <= 20; fator++ ) {
    resultado += ' ->' + number + ' *' + fator + ' =' + (number * fator) + '\n'
}

alert('Resultado da tabuada de '+ number + ':\n\n' + resultado)