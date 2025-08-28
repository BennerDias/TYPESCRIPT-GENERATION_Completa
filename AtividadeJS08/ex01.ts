import { Queue } from "../queue";
import * as leia from "readline-sync"

const fila = new Queue<string> ()
let continuar: boolean = true
let opcao: number

do {
console.log(`
               *****************Banco Laranjadinho!*****************
                    Selecionar       |           Descricao   
                         1           |   Adicionar Clientes na Fila 
                         2           |   Listar todos os Clientes   
                         3           |   Retirar cliente da fila    
                         0           |             Sair              
              ======================================================`)

    opcao = leia.questionInt('Digite a opcao desejada: ')
    
    switch (opcao){
        case 1:
            let nome: string = leia.question('Qual o seu nome? ')  
            fila.enqueue(nome)
            console.log(`O proximo da fila e o ${fila.peek()}`)
            break
        case 2:
            fila.isEmpty() === false ? console.log(`A fila esta ordenada da seguinte forma: `) : console.log('A Fila nao tem ninguem')
            fila.printQueue()
            break
        case 3:
            if(fila.isEmpty() === false){console.log(`Chamando... ${fila.peek()}`)
                fila.dequeue()
                console.log(`O proximo da fila e o ${fila.peek()}`)
        } else {
            console.log('Nao ha ninguem na fila')
        }
            break
        case 0:
            continuar = false
            console.log('Ate breve!') 
    }

} while (continuar)


