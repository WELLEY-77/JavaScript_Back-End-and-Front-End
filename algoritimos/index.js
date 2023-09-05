const precosLivros = [20, 15, 35, 40, 50, 20];

let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++){
    if (precosLivros[atual] < precosLivros[maisBarato]){
        maisBarato = atual
    }
}

console.log(` O menor preço é ${precosLivros[maisBarato]} `)