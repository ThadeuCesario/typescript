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
 * Veja o caso abaixo que tenho um array de endereço. Veja que nesse caso, sempre será o endereço e o número do endereço. 
 * Portanto sempre será string e number. 
 * Logo, podemos tratar como sendo uma tupla. Para isso, basta seguir o esquema abaixo: 
 * 
 * let address: [string, number] = ['Avenidade Teste', 123];
 * 
 * Veja que basicamente estamos declarando que temos um array, com o primeiro elemento sendo uma string e o segundo elemento sendo um number. 
 * 
 * Se eu tentar adicionar um terceiro elemento, o typescript apontará um erro. Ou até mesmo se eu tentar invertar as posições, também gerará um problema.
 * Para não dar erro, precisamos de um array com duas posições, sendo a primeira uma string e a segunda um number.
 */
let address: [string, number] = ['Avenidade Teste', 123];
console.log(address);

/**
 * Enum
 * São estruturas que contém valores pré-definidos. Então por exemplo os dias da semana, ou até mesmo os meses do ano, são bons exemplos que podemos tratar
 * com os 'Enums'
 */
enum Colors{
    Red = 100,    // 0 (Apesar de possuir esses valores fixos, podemos definir nossos proproios valores. Por exemplo Red = 100. Então passará a ser o valor 100), todos os elementos seguintes serão afetados.
    Green,  // 1
    Blue,   // 2  -> nesse caso será 102, porque definimos o Red como 100. Podemos até referenciar valores duplicados, por exemplo colocar o Blue = 100.
}

let myColor: Colors = Colors.Blue; // No caso como é o azul, o retorno é 2
console.log(myColor); // 2


/**
 * Tipo Any 
 * Basicamente com ela podemos definir qualquer valor para a variável.
 * Então veja no exemplo abaixo que tenho uma variável chamada 'car' do tipo any.
 * Iniciei essa varias com uma string e logo em seguida mudei para object. 
 * Como o tipo é any, não teve problema nenhum.
 */
let car: any = 'BMW';
console.log(car);
car = {model: 'BMW', year: 2019};
console.log(car);



/**
 * Funções
 * No javascript sabemos que pela tipagem dinâmica, o retorno seria normal. 
 * Mas e se quisermos dizer que essa função deve retornar uma string? 
 * Para isso, basta fazer:
 * function returnMyName(): string{}
 * Veja que coloquei o ': string'
 */
function returnMyName(): string{
  return userName;
}

console.log(returnMyName());

/**
 * Funções void (Não retorna nada)
 * 
 * Nesses casos, basta utilizar o tipo void. 
 * function Hello(): void{}, o tipo void deixa explícito que essa função não retorna absolutamente nada.
 */

function Hello(): void{
  console.log('Hello Typescript');
}

Hello();

/**
 * Aplicando tipos nos parâmetros da função.
 * function calc(numA:number, numB:number): number{}
 * Veja que o primeiro parametro que definimos que é do tipo number, o numB que também definimos que é do tipo number.
 * Além disso, essa função retorna um number.
 */
function calc(numA:number, numB:number): number{
  return numA *numB;
}

console.log(calc(10, 10));

/**
 * Em javascript, podemos criar uma função e atribuir sua função em uma variável. 
 * Pois em typescript podemos tipar uma variável, deixando explícito que aquela variável receberá uma função.
 * Para isso, é bem semelhante quando criamos um arrow function. Além disso, precisamos informar quais são os
 * parâmetros e qual será o tipo de retorno.
 * Veja o caso abaixo: 
 * let callHello: (numeroA: number, numeroB: number) => number;
 * Tenho uma variável que receberá uma função, essa função terá dois parãmetros que são do tipo number. Além disso, o retorno dessa função,
 * também será do tipo number.
 * 
 * Veja que no exemplo abaixo passei a função 'calc', essa função segue o mesmo modelo de tipagem que a variável 'callHello'.
 * Portanto, consegui atribuir e função 'calc' dentro da variável 'callHello'; 
 */
let callHello: (numberA: number, numberB: number) => number;

callHello = calc;
console.log(callHello(5,5));