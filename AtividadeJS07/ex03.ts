// Escreva um programa para criar uma Collection Set do tipo number. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos 
// e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
// Mostre na tela todos os elementos da Collection Set. 

import leia = require('readline-sync')


let numeros: Set<number> = new Set<number>();
console.log('Digite 10 valores inteiros nao repetidos.')

while(numeros.size < 10){
    let numero = leia.questionInt(`Digite o ${numeros.size + 1} valor: `);

    if(numeros.has(numero)){
        console.log('Esse numero ja foi inserido, por favor insira outro. ')
    } else {
        numeros.add(numero)
    }
}

console.log('Números inseridos:', numeros);

// Professor, o exercício não exigia mas eu estava quebrando a cabeça e adicionei uma validação para não permitir valores repetidos para garantir que o set tenha 10 valores.