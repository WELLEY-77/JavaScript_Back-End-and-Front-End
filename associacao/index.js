const Address = require("./Address");
const Person = require("./Person");

const addr = new Address('leleo', 88, 'popoppoopo', 'amon', 'br')
const jonh = new Person('jonh', addr)

console.log(jonh.address.fullAddress)
console.log(addr)