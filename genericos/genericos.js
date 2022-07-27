"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João'));
console.log(echo(27));
console.log(echo({ nome: 'João', idade: 27 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
// Generics disponíveis na api
const avaliacoes = [10, 8, 7];
avaliacoes.push(8.6);
// avaliacoes.push('4.5');
console.log(avaliacoes);
//# sourceMappingURL=genericos.js.map