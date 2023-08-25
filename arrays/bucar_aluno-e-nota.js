const alunos = ['Joao', 'pedro', 'chico', 'manel']
const notas = [6, 6.8, 10, 9]

const AlunosENotas = [alunos, notas]

function verificarAlunoEMedia(aluno) {
    if (AlunosENotas[0].includes(aluno)){
        const indice = AlunosENotas[0].indexOf(aluno)
        const nota = AlunosENotas[1][indice]
        console.log(`O aluno ${aluno} tem a nota ${nota}`)
    }else {
        console.log(`Aluno ${aluno} não cadastrado`)
    }
}

verificarAlunoEMedia('Joao')