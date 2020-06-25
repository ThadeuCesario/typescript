//String
let userName:string = 'Thadeu';
console.log(userName);
//userName = 28;

//numbers
let userAge:number = 27;
//userAge = 'Ana';
userAge = 27.5; //O javascript e typescript não difere numero inteiro de numero flutuante.
console.log(userAge);

//boolean
let hasHobbies:boolean = false;
//hasHobbies = 1;
console.log(hasHobbies);


/**
 * Quando trabalhamos sem nenhum tipo explícito, criamos uma variável dinâmica que é perfeitamente interpretada pelo Typescript.
 * Então, veja no caso abaixo que primeiramente tinhamos uma idade que foi atribuido um tipo number,
 * em seguida atribuímos o tipo string.
 * No typescript é conhecido como 'any', porém abordaremos mais tarde. Que é basicamente um tipo que pode ter, número, string
 * objeto, array...
 */
let myAge:any;
myAge = 27;
console.log(typeof myAge); //number
myAge = 'idade é 27';
console.log(typeof myAge); //string