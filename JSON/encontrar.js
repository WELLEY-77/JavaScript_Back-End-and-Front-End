const clientes = require('./clientes.json');


function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor))
}

const encontrarObj = encontrar(clientes, 'nome' , 'Jerrome')
const encontrarObj2 = encontrar(clientes, 'telefone' , '4775323087')

console.log(encontrarObj2)