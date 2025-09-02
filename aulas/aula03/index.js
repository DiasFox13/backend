const {soma, divisao} = require("index.js")

if (soma(1, 1) === 2 ) console.log("Passou 1º!");
    else console.log("Deu ruim 1º!");

if (soma(1, 0) === 1 ) console.log("Passou 2º!");
    else console.log("Deu ruim 2º!");

if (soma(1, -1) === 0 ) console.log("Passou 3º!");
    else console.log("Deu ruim 3º!");

if (divisao(1, 1) === 1 ) console.log("Passou 4º!");
    else console.log("Deu ruim 4º!");

function soma (a, b){
    return a + b;
}

function divisao(a, b){
    return 1;
}