// para transpilar precisa dar ctrl + shift + b  e dar watch e depois ir no powershell e dar node arquivo.js
// String Type

// => Usando o Single Quotes (aspas simples)
let nomeCompleto : string = 'Denerval da Silva Pelizario'; 
let animal : string = 'Panda';
console.log(nomeCompleto)
console.log("tipo " + typeof(nomeCompleto))
console.log(animal)
console.log("tipo " + typeof(animal))
console.log('\n')

// => Usando o Double Quotes (aspas duplos)

let funcaoEmpresa : string = "Cloud Advocate em Javascript";
let animal2 : string = "Elefante";
console.log(funcaoEmpresa);
console.log("tipo " + typeof(funcaoEmpresa))
console.log(animal2);
console.log("tipo " + typeof(animal2))
console.log('\n')


// => Usando o Back Ticks (acentos graves)

let nomeEmpresa : string = 'Microsoft';

let dadosFuncionario : string = `Seja bem-vindo ${nomeCompleto}, a empresa ${nomeEmpresa}!!`

console.log(dadosFuncionario);
console.log('\n')



