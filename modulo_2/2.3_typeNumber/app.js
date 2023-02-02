"use strict";
// para transpilar precisa dar ctrl + shift + b  e dar watch e depois ir no powershell e dar node arquivo.js
// Number Type
// type number - inteiros, flutuantes, positivos, negativos, infinito , nan e etc  Obs number -> tipo primitivo,  Number -> object
let num1 = 14.0; // number
let num2 = 0x37cf; // hexadecimal
let num3 = 0o377; // octal
let num4 = 0b111001; // binary
console.log('Number - Ponto Flutuante - ' + num1);
console.log(typeof (num1)); // usando typeof para verificar e confirmar o type de variavel
console.log('-------------');
console.log('Number - Hexadecimal - ' + num2);
console.log(typeof (num2)); // usando typeof para verificar e confirmar o type de variavel
console.log('-------------');
console.log('Number - Octal - ' + num3);
console.log(typeof (num3)); // usando typeof para verificar e confirmar o type de variavel
console.log('-------------');
console.log('Number - Binario - ' + num4);
console.log(typeof (num4)); // usando typeof para verificar e confirmar o type de variavel
console.log('-------------');
// type number - bigint  permite trabalhar com numeros grandes sem erros de arredondamento
// obs precisamos alterar no tsconfig o target para 'ES2020'
let big1 = 9007199254740991n;
// binary
let big2 = 134217731n;
// hex
let big3 = 0x200000000003n;
// octal
let big4 = 9007199254740995n;
console.log('Bigint ...', big1);
console.log('-------------');
console.log('Bigint - Binário', big2);
console.log('-------------');
console.log('Bigint - Hexadecimal', big3);
console.log('-------------');
console.log('Bigint - Octal', big4);
