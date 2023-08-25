let opcao = ''

do {
    opcao = prompt(
        '\nEscolha uma opção de calculos:'+
        '\n[1] - Area do triangulo'+
        '\n[2] - Area do retangulo'+
        '\n[3] - Area do quadrado'+
        '\n[4] - Area do trapezio'+
        '\n[5] - Area do circulo'+
        '\n[6] - Sair'
        )
    
    // Funções das areas
    function areaTriangulo() {
        let base = prompt(`Digite os numeros: `)
        let altura = prompt(`Digite os numeros: `)
        let resultado = (base * altura) / 2

        return alert( `O resultado é ${resultado}`)
    }

    function areaRetangulo(){
        let base = prompt(`Digite os numeros: `)
        let altura = prompt(`Digite os numeros: `)

        return alert(`O resultado é ${base * altura}`)
    }

    function areaQuadrado(){
        let lado1 = prompt(`Digite os numeros: `)
        let lado2 = prompt(`Digite os numeros: `)

        return alert(`O resultado é ${lado1 * lado2}`)
    }

    function areaTrapezio(){
        let baseMaior = prompt(`Digite os numeros: `)
        let baseMenor = prompt(`Digite os numeros: `)
        let altura = prompt(`Digite os numeros: `)
        let resultado = (baseMaior + baseMenor) * altura / 2

        return alert(`O resultado é ${resultado}`)
    }
    function areaCirculo(){}

    switch (opcao) {
        case '1':
            areaTriangulo()
            break

        case '2':
            areaRetangulo()
            break

        case '3':
            areaQuadrado()
            break

        case '4':
            areaTrapezio()
            break

        case '5':
            areaCirculo()
            break

        case '6':
            break
        default:
            alert('Opção invalida')
    }

}while(opcao !== '6')