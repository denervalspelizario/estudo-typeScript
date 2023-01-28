
// para transpilar precisa dar ctrl + shift + b  e dar watch e depois ir no powershell e dar node arquivo.td
// variaveis em typeScript
let nome: string = 'Denerval s pelizario';  // lembre o type anottation é o tipo de variável neste caso é uma string
console.log(nome);
console.log('\n');


// exemplo de TYPE ANNOTATION usando  ARRAY

let animais : string[] = ['cão', 'gato', 'onça', 'peixe', 'leão'] ;  // ou seja indica depois do nome da array o tipo junto com [] seguido pela lista
console.log(animais);
console.log('\n');

// exemplo de type annotation usando OBJETO

let dadoPessoal : {   // primeiro se cria o objeto e indica os tipos de dados 
    nome: string,
    idade: number,
    profissao: string,   
};

dadoPessoal = {  // e depois se aplica os dados
    nome: 'Denerval da silva pelizario', idade: 35, profissao: 'desenvolvedor mobile'
};
console.log(dadoPessoal);
console.log('\n');

// exemplo de type annotation usando FUNÇÂO

function multiplicarNumero(num1: number, num2: number){
    return num1 * num2
};

console.log(multiplicarNumero(2,2))