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
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
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
//# sourceMappingURL=ecmascript.js.map