"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * var, let e const
 *
 * -> Let não sofre hoisting igual o var.
 * -> Var possui somente dois tipos de escopo de função e global.
 * -> Let possui três tipos de escopo, de bloco, função e global.
 * -> Const possui três tipos de escopo, de bloco, função e global.
 */
var verificandoComportamento = '?';
console.log(verificandoComportamento);
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco';
    console.log(acao);
}
var cpf = '123.456.789-99';
//cpf = '147.258.369-99';
console.log(cpf);
var segredo = 'externo!';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    var escopoBloco = true;
    console.log(escopoBloco);
}
//console.log(escopoBloco);
/**
 * Arrow Function
 * Para as arrow functions no typescript somos obrigado a colocar os parenteses, não importando se temos somente um parâmetro. Isso porque,
 * precisamos tipar o parâmetro e também o retorno da função.
 *
 * O contexto do this varia.
 * Veja no exemplo abaixo inclusive que utilizamos o bind para fazer uma nova referencia para o valor do this.
 * Mas esse comportamento muda quando utilizamos uma arrow function, pois o this estará sempre referenciando o contexto léxico da função.
 * Ou seja, o this de uma arrow function sempre aponta para o lugar no qual a função foi criada.
 *
 * Portanto o this é uma diferença que precisamos entender, entre uma função comum do javascript e uma função arrow.
 */
var somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(2, 3));
var saudacao = function () { return console.log('olá'); };
saudacao();
var falarCom = function (pessoa) { return console.log("Ol\u00E1 " + pessoa); };
falarCom('Thadeu Munhóz Cesário');
/*
function normalComThis(){
  console.log(this);
}
normalComThis();

const normalComThisEspecial = normalComThis.bind({nome: 'Ana'});
normalComThisEspecial();

const arrowComThis = () => console.log(this);
arrowComThis();
*/
function contagemRegressiva(inicio) {
    if (inicio === void 0) { inicio = 3; }
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim");
}
contagemRegressiva(); //Valor padrão 3
contagemRegressiva(5); //Valor parametro 5
/**
 * Operador Rest e Spread
 * Spread -> espalhar
 * Rest -> Agrupar
 *
 * Devemos lembrar que podemos utilizar parametros antes, quando estamos utilizando o rest e o
 * spread. Porém, não devemos colocar parâmetros depois de um rest, pois poderá ocasionar problema
 * de compilação.
 */
var numbers = [1, 90, 99, -5, 230];
console.log("O maior n\u00FAmero \u00E9 " + Math.max.apply(Math, numbers));
var turmaA = ['Thadeu', 'Karina', 'Katharina'];
var turmaB = ['Thiago', 'Kelly', 'Clara'];
var turmaC = __spreadArrays(turmaA, turmaB);
console.log("turmaA: " + turmaA);
console.log("turmaB: " + turmaB);
console.log("turmaC: " + turmaC);
function retornarArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __spreadArrays(args);
}
var numeros = retornarArray(1, 2);
console.log(numeros);
//Rest e spread - tupla
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1) " + a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log(Array.isArray(params));
    console.log("2) " + params[0] + " " + params[1] + " " + params[2]);
}
tuplaParam2.apply(void 0, tupla);
/**
 * Destructuring Array
 *
 */
var web = ['Javascript', 'CSS3', 'HTML5', 'React', 'Amgular'];
//const linguagem = web[0];
//const estilo = web[1];
var linguagem = web[0], estilo = web[1];
console.log(linguagem, estilo);
var _a = [2, 3], w = _a[0], z = _a[1];
var usuario = {
    nome: 'Thadeu Munhóz Cesário',
    idade: 23,
    profissao: {
        desenvolvedor: true,
    }
};
var nomeUsuario = usuario.nome;
var idadeUsuario = usuario.idade;
var nomeUser = usuario.nome, idadeUser = usuario.idade, desenvolvedor = usuario.profissao.desenvolvedor;
console.log(nomeUser, idadeUser);
console.log(nomeUsuario, idadeUsuario);
console.log(desenvolvedor);
/**
 * Desafio
 */
// Exercicio 1
var dobro = function (valor) { return valor * 2; };
console.log(dobro(10));
// Exercicio 2
var dizerOla = function (nome) {
    if (nome === void 0) { nome = 'Galera'; }
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
var nums = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, nums));
// Exercicio 4
var array = [55, 20];
array.push.apply(array, nums);
console.log(array);
// Exercicio 5
var notas = [8.5, 6.3, 9.4];
var notas1 = notas[0], notas2 = notas[1], notas3 = notas[2];
console.log(notas1, notas2, notas3);
// Exercicio 6
var cientista = { primeiroNome: "Will", experiencia: 12 };
var primeiroNome = cientista.primeiroNome, experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
//# sourceMappingURL=ecmascript.js.map