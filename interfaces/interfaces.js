"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Karina';
}
const pessoa = {
    nome: 'Thadeu Munhóz Cesário',
    idade: 27
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//# sourceMappingURL=interfaces.js.map