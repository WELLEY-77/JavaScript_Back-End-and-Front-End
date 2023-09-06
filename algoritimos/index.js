const livros = require('./listaLivros.json')

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++){
    if (livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
}

console.log(` O livro mais barato Custa ${livros[maisBarato].preco}, e seu titulo é ${livros[maisBarato].titulo} `)