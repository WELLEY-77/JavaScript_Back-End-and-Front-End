class Veiculo {
    mover() {
        console.log('O veiculo esta se movendo...')
    }
}

class Car extends Veiculo {
    mover() {
        console.log('O carro esta se movendo')
    }
}

class Navio extends Veiculo {
    mover() {
        console.log('O navio esta navegando..')
    }
}

class Avion extends Veiculo {
    mover(speed) {
        console.log(`O avião esta voando a ${speed} km/h`)
    }
}


const gol = new Car()
const navio = new Navio()
const tan = new Avion()

// gol.mover()
// navio.mover()
// tan.mover(100)

function start(veiculo) {
    console.log('O veiculo esta se movendo...')
    veiculo.mover()
}

start(gol)
start(tan)
start(navio)