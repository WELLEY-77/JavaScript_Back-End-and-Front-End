const notas = [10, 4.9, 10, 9.5]


const novasNotas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1
})

console.log(novasNotas)