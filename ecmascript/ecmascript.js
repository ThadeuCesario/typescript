"use strict";
var _this = this;
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
function normalComThis() {
    console.log(this);
}
normalComThis();
var normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
normalComThisEspecial();
var arrowComThis = function () { return console.log(_this); };
arrowComThis();
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
//# sourceMappingURL=ecmascript.js.map