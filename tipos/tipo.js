"use strict";
// tipos implícitos
// string
let nome = 'thadeu';
console.log(nome);
// nome = 12
// numbers
let idade = 27;
// idade = `thadeu`;
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);
// tipos explicitos;
// Nesse caso como eu não inicializei a variável, o Typescript não inferiu nenhum tipo.
// então essa variável aceita valores dinâmicos. No Typescript esse é o tipo any =)
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = `idade é 34`;
console.log(typeof minhaIdade);
//array
let myHobbies = ['Estudar', 'Treinar'];
console.log(myHobbies[0]);
console.log(typeof myHobbies);
myHobbies = [10, 20, 30]; //como é um array de any
// myHobbies = 'string';
console.log(myHobbies);
let numberType = 123;
// numberType = 'teste';
console.log(numberType);
//Tuplas
let endereco = ["Av Principal", 99];
console.log(endereco);
// Enum (estrutura que definimos valores pré-definidos)
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; // 2
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log("minhaCor", minhaCor);
let minhaCor2 = Cor.Azul;
console.log("minhaCor2", minhaCor2);
let carro = 'BMW';
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2019
};
// Funções
// Ao lado da função podemos colocar o tipo de retorno que esperamos dela
function retornaMeuNome() {
    // return minhaIdade;
    return nome;
}
console.log('function retornaMeuNome', retornaMeuNome());
// Quando temos uma função que não retorna nada, podemos utilizar o tipo void ;) 
function digaOi() {
    console.log('oi');
    // return 'oi';
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar('ola', 2)); // somente podemos passar number e number como parametros da função
console.log(multiplicar(2, 2));
// Tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 5));
//Objetos
let usuarios = {
    nome: 'João',
    idade: 27,
};
console.log(usuarios);
// usuarios = {}
