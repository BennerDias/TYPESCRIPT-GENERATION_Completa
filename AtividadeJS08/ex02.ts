import { Stack } from "../stack";
import * as leia from "readline-sync"

const pilha = new Stack<string> ()
let continuar:boolean = true
let opcao: number

do {
    console.log("*********************************************************");
    console.log("                 1 - Adicionar Livro na pilha            ");
    console.log("                 2 - Listar todos os Livros              ");
    console.log("                 3 - Retirar Livro da pilha              ");
    console.log("                 0 - Sair                                ");
    console.log("*********************************************************");
    console.log("Entre com a opção desejada: ");

    opcao = leia.questionInt('Digite a opcao desejada: ')


        switch (opcao){
            case 1:
                let livro: string = leia.question('Qual o nome do livro? ')  
                pilha.push(livro)
                break
            case 2:
                pilha.isEmpty() === true ? console.log('Nao ha livros para Listar. Adicione o primeiro livro pressionando 1 no menu') :
                console.log('Aqui estao todos os livros listados ate o momento: ')
                pilha.printStack()
                break
            case 3:
                pilha.isEmpty() === true ? console.log('Nao ha livros para retirar.') :
                console.log(`${pilha.peek()} removido...`)
                pilha.pop()
                break
            case 0:
                continuar = false
                console.log('Ate breve!') 
        }
} while (continuar)