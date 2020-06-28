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
if(estaFrio){
  let acao = 'Colocar o casaco';
  console.log(acao);
}

const cpf: string = '123.456.789-99'
//cpf = '147.258.369-99';
console.log(cpf);

var segredo = 'externo!';
function revelar(){
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
 * 
 */

const somar = function(n1: number, n2: number): number{
  return n1 + n2;
}
console.log(somar(2,2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(2,3));