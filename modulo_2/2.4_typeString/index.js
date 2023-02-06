"use strict";
// para transpilar precisa dar ctrl + shift + b  e dar watch e depois ir no powershell e dar node arquivo.js
// String Type
// => Usando o Single Quotes (aspas simples)
let nomeCompleto = 'Denerval da Silva Pelizario';
let animal = 'Panda';
console.log(nomeCompleto);
console.log("tipo " + typeof (nomeCompleto));
console.log(animal);
console.log("tipo " + typeof (animal));
console.log('\n');
// => Usando o Double Quotes (aspas duplos)
let funcaoEmpresa = "Cloud Advocate em Javascript";
let animal2 = "Elefante";
console.log(funcaoEmpresa);
console.log("tipo " + typeof (funcaoEmpresa));
console.log(animal2);
console.log("tipo " + typeof (animal2));
console.log('\n');
// => Usando o Back Ticks (acentos graves)
let nomeEmpresa = 'Microsoft';
let dadosFuncionario = `Seja bem-vindo ${nomeCompleto}, a empresa ${nomeEmpresa}!!`;
console.log(dadosFuncionario);
console.log('\n');
