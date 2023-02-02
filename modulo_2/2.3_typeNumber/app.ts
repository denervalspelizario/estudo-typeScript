// para transpilar precisa dar ctrl + shift + b  e dar watch e depois ir no powershell e dar node arquivo.js
// Number Type

// type number - inteiros, flutuantes, positivos, negativos, infinito , nan e etc  Obs number -> tipo primitivo,  Number -> object

let num1: number = 14.0;  // number
let num2: number = 0x37cf;  // hexadecimal
let num3: number = 0o377;  // octal
let num4: number = 0b111001;  // binary


console.log('Number - Ponto Flutuante - ' + num1);
console.log(typeof(num1))  // usando typeof para verificar e confirmar o type de variavel
console.log('-------------')
console.log('Number - Hexadecimal - ' + num2);
console.log(typeof(num2))  // usando typeof para verificar e confirmar o type de variavel
console.log('-------------')
console.log('Number - Octal - ' + num3);
console.log(typeof(num3))  // usando typeof para verificar e confirmar o type de variavel
console.log('-------------')
console.log('Number - Binario - ' + num4);
console.log(typeof(num4))  // usando typeof para verificar e confirmar o type de variavel
console.log('-------------')


// type number - bigint  permite trabalhar com numeros grandes sem erros de arredondamento
// obs precisamos alterar no tsconfig o target para 'ES2020'

let big1: bigint = 9007199254740991n;

// binary
let big2: bigint = 0b1000000000000000000000000011n;

// hex
let big3: bigint = 0x200000000003n;

// octal
let big4: bigint = 0o400000000000000003n;

console.log('Bigint ...' , big1);
console.log('-------------')
console.log('Bigint - Binário' , big2);
console.log('-------------')
console.log('Bigint - Hexadecimal' , big3);
console.log('-------------')
console.log('Bigint - Octal' , big4);

