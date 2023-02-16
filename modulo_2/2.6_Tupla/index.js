"use strict";
// para transpilar precisa dar ctrl + shift + b  e dar watch e depois ir no powershell e dar node arquivo.js
// a tupla é uma matriz(array) com um numero elementos FIXOS ouse ja tem que ser na ordem certa senão da erro
// Exemplo 01 - uso simples de Tuplas em Typescript
let pessoa;
pessoa = ['Denerval', 'Desenvolvedor Mobile', 36]; // tem que ser na ordem o type senão da erro
console.log(pessoa);
// Exemplo 02 - acessando o valor da Tupla
let pessoa2;
pessoa2 = ['Denerval', 'Desenvolvedor Mobile', 36];
console.log(pessoa2[1]); // para acessar é a mesma premissa igual uma array normal
console.log('\n');
// Exemplo 03 - Outra forma de usar Tuplas em Typescript(com labels)
let pessoa3 = ['Denerval', 'Desenvolvedor Mobile', 35];
console.log(pessoa3);
console.log('\n');
// Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['abacaxi', 'laranja', 'maçã', 'melancia', 'manga']; /* esse ...string[](spread operator) está dizendo que os tipos de dados
                                                                                               vão ser todos strings pode ser 5 ou 5000 os proximos todos vão ser string ..
                                                                                               é uma lista heterogenia(todos os tipos são o mesmo) mas pode ser variados */
console.log(...listaFrutas[1]); // para acessar os dados se usa o spread operator                                                                                             
console.log(...listaFrutas); // tanto 1 item como todo o conteudo da Tupla 
console.log('\n');
