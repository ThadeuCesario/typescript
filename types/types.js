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
 * Veja que basicamente estamos declarando que temos um array, com o primeiro elemento sendo uma string e o segundo elemento sendo um number.
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
var callHello;
callHello = calc;
console.log(callHello(5, 5));
/**
 * Podemos definir variáveis do tipo Object.
 * Quando criamos um objeto igual no caso abaixo o typescript já se responsabilizará por duas coisas:
 * 1) Temos um objeto
 * 2) Esse objeto possui um determinado conjunto de parametros
 * Um detalhe é que a ordem não importa. Logo é diferente se compararmos com uma função, em que a ordem dos parâmetros é importante. Mesmo porque objeto
 * não tem essa obrigatoriedade de sequencia de atributos.
 *
 * Podemos deixar mais explicito os atributos dentro de nosso objeto:
 *
 * {name: string, age: number}
 *
 * Mas se eu quiser remover, também não tem problema. Pois será inferido pelo próprio Typescript.
 */
var user = {
    name: 'Thadeu',
    age: 27
};
console.log(user);
//user = {} //Isso retornará um erro, lembrando que não apenas os tipos das propriedades serão verificados mas também os atributos passados são inferidos.
/*
O caso abaixo também gera um erro, porque PRECISAMOS respeitar o 'name' e o 'age'.

user = {
  nome: 'Thadeu',
  idade: 27
}
*/
user = {
    age: 28,
    name: 'Karina',
};
console.log(user);
var funcionario = {
    nomesSupervisores: ['Thadeu', 'Davi', 'Eliel', 'Júnior'],
    baterPonto: function (pontoSupervisor) {
        if (pontoSupervisor <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horário';
        }
    }
};
console.log(funcionario.nomesSupervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(10));
var funcionario2 = {
    nomesSupervisores: ['Liliane', 'Filipe', 'Mateus', 'Robson'],
    baterPonto: function (pontoSupervisor) {
        if (pontoSupervisor <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horário';
        }
    }
};
/**
 * Union Types
 * Veja uma aplicação de union types, no exemplo abaixo estou apontando que minha nota poderá ser do tipo 'number' ou do tipoe 'string'.
 */
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
/**
 * Checagem de tipos de forma manual (lembrando os tempos do javascript)
 * Typescript é basicamente colocar o Javascript dentro de um tanque de guerra =D.
 */
var value = 30;
if (typeof value === 'number') {
    console.log('é um valor number');
}
else {
    console.log(typeof value);
}
/**
 * Tipo 'never'.
 * Quer especificar que a função ou termina com erro ou ficará em algum tipo de loop.
 * Portanto nunca retornará nada.
 * Mas veja o tipo never é diferente do tipo void.
 * Então ela não terá um fluxo natural do restante das funções. Ela não será inicializada
 * e depois finalizará normalmente. Essa função
 *
 */
function fail(message) {
    /**
     * Precisamos ter um laço infinito ou então mesmo um erro.
     */
    throw new Error(message);
}
var produto = {
    nome: 'Sabão',
    preco: 10,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length === 0) {
            fail('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            fail('Preço inválido');
        }
    }
};
produto.validarProduto();
/**
 * Atribuindo null para uma variável.
 * Por padrão o typescript não nos permite atribuit um tipo null em variáveis.
 * Vemos o caso abaixo que temos uma variável altura que teve o seu tipo inferido (number).
 * Em seguida, tentei atribuir o null e é gerado um retorno.
 * Podemos desabilitar a flag strictNullChecks no arquivo do 'tsconfig'.
 * ou podemos utilizar o union type.
 */
var altura = 12;
//altura = null;
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Thadeu',
    tel1: '11966469263',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
