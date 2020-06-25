"use strict";
//String
var userName = 'Thadeu';
console.log(userName);
//userName = 28;
//numbers
var userAge = 27;
//userAge = 'Ana';
userAge = 27.5; //O javascript e typescript não difere numero inteiro de numero flutuante.
console.log(userAge);
//boolean
var hasHobbies = false;
//hasHobbies = 1;
console.log(hasHobbies);
/**
 * Quando trabalhamos sem nenhum tipo explícito, criamos uma variável dinâmica que é perfeitamente interpretada pelo Typescript.
 * Então, veja no caso abaixo que primeiramente tinhamos uma idade que foi atribuido um tipo number,
 * em seguida atribuímos o tipo string.
 * No typescript é conhecido como 'any', porém abordaremos mais tarde. Que é basicamente um tipo que pode ter, número, string
 * objeto, array...
 */
var myAge;
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
var hobbies = ['Estudar javascript', 'Cubo Mágico', 'Fazer sudoku', 'Ver vídeos'];
console.log(hobbies);
console.log(typeof hobbies); // retorna um Object
hobbies = [100];
console.log(hobbies);
/**
 * Outra funcionalidade do typescript são as Tuplas.
 * Basicamente definimos um array que podemos declarar seus tipos de forma ordenada. Então por exemplo: "Quero um array que o primeiro elemento seja um string,
 * o segundo um number e o terceiro um number";
 * Podemos fazer isso, utilizando tuplas.
 * Veja o caso abaixo que tenho um array de endereço. Veja que nesse caso, sempre será o endereço e o número do endereço.
 * Portanto sempre será string e number.
 * Logo, podemos tratar como sendo uma tupla. Para isso, basta seguir o esquema abaixo:
 *
 * let address: [string, number] = ['Avenidade Teste', 123];
 *
 * Veja que basicamente estamos declarando que remos um array, com o primeiro elemento sendo uma string e o segundo elemento sendo um number.
 *
 * Se eu tentar adicionar um terceiro elemento, o typescript apontará um erro. Ou até mesmo se eu tentar invertar as posições, também gerará um problema.
 * Para não dar erro, precisamos de um array com duas posições, sendo a primeira uma string e a segunda um number.
 */
var address = ['Avenidade Teste', 123];
console.log(address);
/**
 * Enum
 * São estruturas que contém valores pré-definidos. Então por exemplo os dias da semana, ou até mesmo os meses do ano, são bons exemplos que podemos tratar
 * com os 'Enums'
 */
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 100] = "Red";
    Colors[Colors["Green"] = 101] = "Green";
    Colors[Colors["Blue"] = 102] = "Blue";
})(Colors || (Colors = {}));
var myColor = Colors.Blue; // No caso como é o azul, o retorno é 2
console.log(myColor); // 2
/**
 * Tipo Any
 * Basicamente com ela podemos definir qualquer valor para a variável.
 * Então veja no exemplo abaixo que tenho uma variável chamada 'car' do tipo any.
 * Iniciei essa varias com uma string e logo em seguida mudei para object.
 * Como o tipo é any, não teve problema nenhum.
 */
var car = 'BMW';
console.log(car);
car = { model: 'BMW', year: 2019 };
console.log(car);
/**
 * Funções
 * No javascript sabemos que pela tipagem dinâmica, o retorno seria normal.
 * Mas e se quisermos dizer que essa função deve retornar uma string?
 * Para isso, basta fazer:
 * function returnMyName(): string{}
 * Veja que coloquei o ': string'
 */
function returnMyName() {
    return userName;
}
console.log(returnMyName());
/**
 * Funções void (Não retorna nada)
 *
 * Nesses casos, basta utilizar o tipo void.
 * function Hello(): void{}, o tipo void deixa explícito que essa função não retorna absolutamente nada.
 */
function Hello() {
    console.log('Hello Typescript');
}
Hello();
/**
 * Aplicando tipos nos parâmetros da função.
 * function calc(numA:number, numB:number): number{}
 * Veja que o primeiro parametro que definimos que é do tipo number, o numB que também definimos que é do tipo number.
 * Além disso, essa função retorna um number.
 */
function calc(numA, numB) {
    return numA * numB;
}
console.log(calc(10, 10));
