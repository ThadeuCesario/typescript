"use strict";
let canalDois = 'Gaveta';
let inscritosDois = 12123;
// canal = inscritos;
console.log(canalDois);
// function saudar(isManha: boolean, horas: number): string { //noUnusedParameters
//     let a = 1; // noUnusedLocals
//     let saudacao: string;
//     if(isManha) {
//         saudacao = 'Bom dia';
//     } else {
//         saudacao = 'Aproveite o drink'
//     }
//     return saudacao; //strictNullChecks
// }
function saudarNew(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        saudacao = 'Aproveite o drink';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map