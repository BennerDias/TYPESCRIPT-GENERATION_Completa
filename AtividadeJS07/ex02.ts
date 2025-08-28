// Escreva um programa para criar uma Collection Array do tipo number, 
// inicializada com 10 valores inteiros. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição deste número na Collection. 
// Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

import leia = require('readline-sync')

let numeros: number[] = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6)

let numero: number = leia.questionInt('Digite um numero: ')

let encontrei: number | undefined;

for(let i = 0; i < numeros.length; i++){
    if(numero === numeros[i]){
        encontrei = (i)  
    }
}
encontrei === undefined ? console.log(`O numero ${numero}, nao foi encontrado`) : console.log(`Encontrei o valor digitado, na posicao ${encontrei}`)
