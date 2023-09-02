const dados = require('./cliente.json');


console.log(dados);
console.log(typeof(dados));


const textoEmString = JSON.stringify(dados);

console.log(textoEmString);
console.log(typeof textoEmString);
console.log(textoEmString.nome);

const objectCliente = JSON.parse(textoEmString);

console.log(objectCliente)