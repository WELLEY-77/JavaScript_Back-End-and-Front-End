const idade = Number(prompt('Qual sua idade? '))

if (idade > 18) {
    alert('Você é adulto')
}else if (idade < 18 && idade >= 11) {
    alert('Você é adolescente')
}else if (idade < 11) {
    alert('Você é criança')
}
