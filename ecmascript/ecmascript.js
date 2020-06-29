"use strict";
/**
 * var, let e const
 *
 * -> Let não sofre hoisting igual o var.
 * -> Var possui somente dois tipos de escopo de função e global.
 * -> Let possui três tipos de escopo, de bloco, função e global.
 * -> Const possui três tipos de escopo, de bloco, função e global.
 */
let verificandoComportamento = '?';
console.log(verificandoComportamento);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco';
    console.log(acao);
}
const cpf = '123.456.789-99';
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
    let escopoBloco = true;
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
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log('olá');
saudacao();
const falarCom = (pessoa) => console.log(`Olá ${pessoa}`);
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
function contagemRegressiva(inicio = 3) {
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
const numbers = [1, 90, 99, -5, 230];
console.log(`O maior número é ${Math.max(...numbers)}`);
const turmaA = ['Thadeu', 'Karina', 'Katharina'];
const turmaB = ['Thiago', 'Kelly', 'Clara'];
const turmaC = [...turmaA, ...turmaB];
console.log(`turmaA: ${turmaA}`);
console.log(`turmaB: ${turmaB}`);
console.log(`turmaC: ${turmaC}`);
function retornarArray(...args) {
    return [...args];
}
const numeros = retornarArray(1, 2);
console.log(numeros);
//Rest e spread - tupla
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
/**
 * Destructuring Array
 *
 */
const web = ['Javascript', 'CSS3', 'HTML5', 'React', 'Amgular'];
//const linguagem = web[0];
//const estilo = web[1];
const [linguagem, estilo] = web;
console.log(linguagem, estilo);
const [w, z] = [2, 3];
const usuario = {
    nome: 'Thadeu Munhóz Cesário',
    idade: 23,
    profissao: {
        desenvolvedor: true,
    }
};
const nomeUsuario = usuario.nome;
const idadeUsuario = usuario.idade;
const { nome: nomeUser, idade: idadeUser, profissao: { desenvolvedor } } = usuario;
console.log(nomeUser, idadeUser);
console.log(nomeUsuario, idadeUsuario);
console.log(desenvolvedor);
/**
 * Desafio
 */
// Exercicio 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2
const dizerOla = (nome = 'Galera') => {
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 4
const array = [55, 20];
array.push(...nums);
console.log(array);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [notas1, notas2, notas3] = notas;
console.log(notas1, notas2, notas3);
// Exercicio 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
/**
 * Assincronismo em javascript
 * Geralmente utilizamos callbacks
 */
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois.promisse..');
        }, 3000);
    });
}
esperar3sPromise()
    .then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1')
    .then(resp => resp.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(respFilm => respFilm.json())
    .then(filme => console.log(filme.title));
//# sourceMappingURL=ecmascript.js.map