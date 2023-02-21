// para transpilar precisa dar ctrl + shift + b  e dar watch e depois ir no powershell e dar node arquivo.js


// a tupla é uma matriz(array) com um numero elementos FIXOS ouse ja tem que ser na ordem certa senão da erro

// Exemplo 01 - uso simples de Tuplas em Typescript

let pessoa : [string, string, number ];

pessoa = ['Denerval', 'Desenvolvedor Mobile', 36]; // tem que ser na ordem o type senão da erro

console.log(pessoa)


// Exemplo 02 - acessando o valor da Tupla

let pessoa2 : [string, string, number ];

pessoa2 = ['Denerval', 'Desenvolvedor Mobile', 36];  

console.log(pessoa2[1]) // para acessar é a mesma premissa igual uma array normal
console.log('\n')


// Exemplo 03 - Outra forma de usar Tuplas em Typescript(com labels)

let pessoa3: [nome: string, posição: string, idade: number] = ['Denerval', 'Desenvolvedor Mobile', 35];
console.log(pessoa3);
console.log('\n');


// Exemplo 04 - Usando Tuplas com Spread Operator

let listaFrutas: [string, ...string[]] = ['abacaxi', 'laranja', 'maçã', 'melancia','manga' ];/* esse ...string[](spread operator) está dizendo que os tipos de dados
                                                                                               vão ser todos strings pode ser 5 ou 5000 os proximos todos vão ser string ..                                                                     é uma lista heterogenia(todos os tipos são o mesmo) mas pode ser variados */
console.log(...listaFrutas[1]); // para acessar os dados se usa o spread operator                                                                                             
console.log(...listaFrutas); // tanto 1 item como todo o conteudo da Tupla 
console.log('\n')

// Exemplo 05 - Lista Heterogênea de Tupla
                     // 1 numero 2 booleano e depois array de strings neste caso recebe como spread operator  a array listaFrutas que contem varias strings
let listaFrutas2 : [number, boolean, ...string[]] = [5, true, ...listaFrutas]
console.log(listaFrutas2)
console.log('\n')

// Exemplo 06 - Uso de Função com Tuplas

function listarPessoas(nome: string[], idades: number[]){ // funcao com uma tupla de nomes com strings e outra tupla de idades com numbers
    return [...nome, ...idades]
}

let resultado = listarPessoas(['Denerval', 'Selma'], [35,54])  

console.log(resultado);
console.log('\n');

// Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome =
           | [primeiroNome: string, sobrenome: string]
           | [ primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome){
    return [...nome];
}           