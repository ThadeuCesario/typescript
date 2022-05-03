"use strict";
let seraQuePode = `?`;
console.log(seraQuePode);
// let seraQuePode = `?`; //hoisting
// var -> escopo de função e global 
// let e const -> escopo de função, global e bloco
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '123.456.000-99';
// cpf='456.780.999.11';
console.log(cpf);
var segredo = 'externo';
const revelar = () => {
    var segredo = 'interno';
    console.log(segredo);
};
revelar();
console.log(segredo);
{
    const def = `def`;
    console.log(def);
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
// Arrow function
// retorno implicito
const somar = (n1, n2) => n1 + n2;
console.log(somar(2, 5));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 5));
const saudacao = () => console.log("ola");
saudacao();
// No typescript precisamos colocar parenteses para realizar a tipagem, mesmo se tiver somente um parametro!
const falarCom = (pessoa) => console.log(`Ola ${pessoa}`);
falarCom('Thadeu Munhoz Cesario');
// this
function normalComThis() {
    console.log(this);
}
normalComThis();
/**
 * Veja que no caso da função normalComThisEspecial, estamos passando um bind apontando para
 * a função normalComThis. Nesse caso o que passei dentro do bind como parametro
 * será o valor que this possui na função normalComThis!
 */
const normalComThisEspecial = normalComThis.bind(1234);
normalComThisEspecial();
// this em arrow function 
/**
 * No caso do this dentro de uma arrow function, será apontado automaticamente para
 * onde aquela função foi definida... por exemplo no browser, pode ser diretamente
 * no contexto do window
 * Para saber qual o this de uma função arrow, basta checar qual o this antes de função se definida
 */
console.log(this);
// const arrowComThis = () => console.log(this);
// console.log(arrowComThis());
// const arrowComThisEspecial = arrowComThis.bind("3456");
// arrowComThisEspecial(); // o bind não sobrepoe o comportamento do this em arrow functions
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// Rest e spread
const numbers = [1, 20, -5, 30, 670];
console.log(Math.max(...numbers));
const turmaA = ['Ana', 'Pedro', 'João'];
const turmaB = ['José', 'Daryl', 'Rick'];
console.log(turmaA.concat(turmaB));
console.log(turmaA.push(...turmaB));
console.log(turmaA);
const retornarArray = (a, ...args) => [a, ...args];
console.log(retornarArray(10, 1, 2, 3, 4, 5));
//Rest & spread tupla
const tupla = [123, 'thadeu', true];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`1) ${params}`);
}
tuplaParam2(...tupla);
// Destructuring array
const caracteristicas = ['Thadeu', 27];
const [nameUser, ageUser] = caracteristicas;
console.log("=> nameUser", nameUser);
console.log("=> ageUser", ageUser);
// Destructuring object
const aluno = {
    nome2: 'Thadeu',
    idade2: 27,
    details: {
        a: '123.123123.123'
    }
};
// igual realizamos com props no react
const { nome2, idade2, details: { a } } = aluno;
console.log("=>>> nome2", nome2);
console.log("=>>> idade2", idade2);
console.log("=>>> a", a);
// template string
const usuarioID = 'SuporteCod3r';
const notificacoes = '9';
const boasVindas = 'Boas vindas ' + usuarioID + ' Notificações: ' + notificacoes; //noob mode
console.log(boasVindas);
console.log(`Boas vindas ${usuarioID} Notificações: ${notificacoes}`); // template string mode hehe
console.log(`${1 + 1 + 2 + 60 * 50}`);
//Callback
function esperar3s(cb) {
    setTimeout(() => {
        cb("retorno callback");
    }, 3000);
}
const readingCb = (param) => console.log("param =>", param);
esperar3s(readingCb);
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("3s depois........");
        }, 4000);
    });
}
esperar3sPromise().then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1')
    .then(resp => resp.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(respFilms => respFilms.json())
    .then(respFilms => console.log(respFilms));
//# sourceMappingURL=ecmascript.js.map