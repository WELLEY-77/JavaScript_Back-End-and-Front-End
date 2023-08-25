const fila = []
let opcao = ''

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    opcao = prompt(
        'Pacientes: \n'+ pacientes +
        '\nEscolha um ação: 1- Novo paciente'+ 
        '\nEscolha um ação: 2- Consultar paciente'+ 
        '\nEscolha um ação: 3- Sair'  
    )

    switch (opcao) {
        case '1':
            const novoPaciente = prompt('Digite o nome do novo paciente: ')
            fila.push(novoPaciente)
            break       
        case '2':
            const pacienteConsultado = fila.shift()

            if (!pacienteConsultado) {
                alert('Não a pacientes na fila!')
            }else{
                alert('O paciente '+pacienteConsultado+' foi removido')
            }
            break       
        case '3':
            break    
        default:
            alert('Opção invalida')   
    }

} while(opcao !== '3')