// para transpilar precisa dar ctrl + shift + b  e dar watch e depois ir no powershell e dar node arquivo.js

// => Exemplo 01 - Uso Colchetes:

let frutas : string[] = ['Abacaxi', 'melancia', 'laranja', 'pessego', 'manga', 'abacate']; 
console.log(frutas[2]); // laranja
console.log('\n');


// => Exemplo 02 - Array Object (Objeto Array)

let frutas2 : Array<string> = ['Abacaxi', 'melancia', 'laranja', 'pessego', 'manga', 'abacate']; 
console.log(frutas[2]); // laranja
console.log('\n');

// Exemplo 03 - Adicionando mais strings com método 'push'

let idiomas: Array<string> = ['Português', 'inglês', 'Espanhol', 'Francês']
console.log(idiomas);
idiomas.push('Mandarim'); // adiciona mandarim no final
console.log(idiomas);
console.log('\n');

// Exemplo 04 - Identificar tamanho do array = metodo 'length'

let idiomas2: Array<string> = ['Português', 'inglês', 'Espanhol', 'Francês']
console.log(idiomas2.length)  // mostra quantidade de objetos no caso 4 objetos na array idiomas2 
console.log('\n');

// Exemplo 05 - Exemplo de Array com Spread Operator

let listaNumeros = [0, 1, 2 , 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];  // adiciona dados da array listaNumeros e cocatena com os dados adiconados manualmente
console.log(listaNumeros);
console.log('\n');



// Exemplo 06 - Exemplo de Array com Laço de iteração

let linguagensArray: string[] = new Array('Javascript', 'Java', 'Python', 'PHP', 'C#');

function funcaoLinguagens(linguagens:string[]){  // parametro e seu tipo
    for (let i = 0; i < linguagens.length; i++) {  // looping para exibir todos os objetos da array
        console.log(linguagensArray[i]) // exibilos na tela
    }
}

funcaoLinguagens(linguagensArray); // chamando a funcao com parametro desejado no caso linguagensArray
                                   // quew vai exibir todos os dados leia linha 43 para entender a funcão