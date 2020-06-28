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
//# sourceMappingURL=ecmascript.js.map