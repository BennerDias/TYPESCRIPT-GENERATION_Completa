// Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
// Mostre na tela todas as cores adicionadas. 
// Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

import leia = require('readline-sync')

let cores: string[] = new Array<string>()


for(let i = 0; i < 5; i++){
    let cor: string = leia.question(`Digite a ${i + 1} cor: `)
    cores.push(cor)
}

console.log(`As cores selecionadas foram: ${cores} `)
console.log(`Ordenadas em ordem crescente ficam ... ${cores.sort()}`)