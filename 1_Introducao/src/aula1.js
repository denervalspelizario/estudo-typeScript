"use strict";
// o padrão é EcmaScript 3 para buildar em EmaScript mais avancado 
// o comando vai ser tsc arquivoUsado.ts --target "ES2015"  ou seja dentro do aspas duplos vc coloca o ano que vc quer buildar o javascript
// se quiser a ultima versão do javascript ára buildar  o comando será  tsc arquivoUsado.ts --target "ESNEXT"          
// tsc --init cria um arquivo tsconfig.json nele sera todas as configs para buildar o jv do jeito que vc deseja
// é mais pratico usa-lo que toda vez ficar digitando os comando acima(linha 3 4,5)
// depois de criado o arquivo tsconfig.json agora para buildar é somente dar o coamndo tsc
// OU SEJA APOS CRIAR O ARQUIVO TSCONFIG USE APENAS O COMANDO TSC   SOMENET ISSO   TSC  E ELE VAI BUILDAR SOZINHO 
// Aula 2 la no tsconfig adicione 
// "rootDir": "./src",   ou seja rota que ficará o arquivo typescript
// "outDir": "./build",  ou sej a no arquivo build ficará o arquivo js depois de transpilado
// ou seja arquivo ts fica no src e depois de usar o comando tsc ele builda um arquivo js no build
/*
let nomes = "Denerval";

console.log("Bem vindo " + nomes);

class Sistemas{
    ip: string;

    constructor(ip: string){
        this.ip = ip
    }
}


const servidor1 = new Sistemas("192.168.500.3") */
let nome = "Denerval";
console.log("Bem vindo " + nome);
console.log("Aprendendo typeScript na pratica");
