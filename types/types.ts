//String
let userName = 'Thadeu';
console.log(userName);
//userName = 28;

//numbers
let userAge = 27;
//userAge = 'Ana';
userAge = 27.5; //O javascript e typescript não difere numero inteiro de numero flutuante.
console.log(userAge);

//boolean
let hasHobbies = false;
//hasHobbies = 1;
console.log(hasHobbies);


/**
 * Quando trabalhamos com tipos explícitos. Criamos uma variável dinâmica que é perfeitamente interpretada pelo Typescript.
 * Então, veja no caso abaixo que primeiramente tinhamos uma idade que foi atribuido um tipo number,
 * em seguida atribuímos o tipo string.
 */
let myAge;
myAge = 27;
console.log(typeof myAge); //number
myAge = 'idade é 27';
console.log(typeof myAge); //string