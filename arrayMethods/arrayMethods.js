const arr = ['1', '2', '3', '4', '5']
console.log(arr)

// Adicinar um elemento no final do array
arr.push('6')
console.log(arr)

// Adicinar um elemento no inicio do array
arr.unshift('0')
console.log(arr)

// Remover o ultimo elemento do array

let novoArray = arr.pop()
console.log(novoArray)
console.log(arr)

// Remover o primeiro elemento do array
let novoArray1 = arr.shift()
console.log(novoArray1)
console.log(arr)

// Pesquisar um elemento dentro do array, o retorno sera false ou true

// false
let pesq = arr.includes(1)
console.log(pesq)

// true
let pesq1 = arr.includes('1')
console.log(pesq1)

console.log(arr)

// Pesquisar um elemento pelo index dentro do array
let index = arr.indexOf('2')
console.log(index)

// Corta uma parte desejada do array

let corte = arr.slice(0,3)
console.log(corte)

const number = [1, 2, 3, 4, 5]
const string = ['joao', 'pedro', 'manel', 'chico', 'antonio']

let numberString = number.concat(string)

console.log(numberString)

let removeName = numberString.splice(5, 1, 'João')

console.log(numberString)
console.log(removeName)

let i = 0
for (let name of numberString) {
    console.log('O '+ name + ' esta na posição '+ i)
    i++
}