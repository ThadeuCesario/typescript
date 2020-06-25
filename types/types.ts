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

/**
 * Tipo array
 * Quando criamos um array, o valor que é contido dentro do array também é inferido. Portanto, no caso abaixo temos um array de string.
 * Quando eu tento atribuir um tipo número, o typescript apontará que não é possível.
 * 
 * Para resolvermos esse problema, podemos declarar a tipagem da seguinte forma: 
 * let hobbies: any[] = ['Estudar javascript', 'Cubo Mágico', 'Fazer sudoku', 'Ver vídeos'];
 * 
 * Veja que temos um 'any[]', significa que estamos trabalhando com um array que suporta qualquer tipo de elementos.
 */
let hobbies: any[] = ['Estudar javascript', 'Cubo Mágico', 'Fazer sudoku', 'Ver vídeos'];
console.log(hobbies);
console.log(typeof hobbies); // retorna um Object
hobbies = [100];
console.log(hobbies);


/**
 * Outra funcionalidade do typescript são as Tuplas.
 * Basicamente definimos um array que podemos declarar seus tipos de forma ordenada. Então por exemplo: "Quero um array que o primeiro elemento seja um string,
 * o segundo um number e o terceiro um number";
 * Podemos fazer isso, utilizando tuplas.
 * 
 */