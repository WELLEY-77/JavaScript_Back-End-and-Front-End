const Author = require("./author");

const jonh = new Author('jonh')

const post = jonh.writePost('title', 'asjdlajsdaks')

post.addComment('jao', 'aksdljas')
post.addComment('pedro', 'aksdljas')

console.log(jonh)
console.log(post)