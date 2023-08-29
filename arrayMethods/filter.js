const alunos = ['joao', 'pedro', 'manel', 'raimundo']
const medias = [10, 5.5, 7, 8]

const alunosReprovados = alunos.filter((_, i) => {
    return medias[i] < 7
})

console.log(alunosReprovados)