const notas = [10, 4.9, 10, 9.5]

let somaDasNotas = 0;

notas.forEach(function (nota) {
    somaDasNotas += nota
})

const media = somaDasNotas / notas.length

console.log(` A soma das notas é : ${media} `)