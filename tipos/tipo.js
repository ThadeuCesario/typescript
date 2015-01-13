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
console.log();
