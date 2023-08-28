const notas = [10, 4.9, 10, 9.5]

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]
}

const media = somaDasNotas / notas.length

console.log(` A soma das notas é : ${media} `)