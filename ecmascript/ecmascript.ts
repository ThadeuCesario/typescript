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

const somar = function(n1: number, n2: number): number{
  return n1 + n2;
}
console.log(somar(2,2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(2,3));

const saudacao = (): void => console.log('olá');
saudacao();

const falarCom = (pessoa: string): void => console.log(`Olá ${pessoa}`);
falarCom('Thadeu Munhóz Cesário');

function normalComThis(){
  console.log(this);
}
normalComThis();

const normalComThisEspecial = normalComThis.bind({nome: 'Ana'});
normalComThisEspecial();

const arrowComThis = () => console.log(this);
arrowComThis();

function contagemRegressiva(inicio: number = 3): void{
  console.log(inicio);
  while(inicio > 0){
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

const turmaA: string[] = ['Thadeu', 'Karina', 'Katharina'];
const turmaB: string[] = ['Thiago', 'Kelly', 'Clara'];
const turmaC: string[] = [...turmaA, ...turmaB];
console.log(`turmaA: ${turmaA}`);
console.log(`turmaB: ${turmaB}`);
console.log(`turmaC: ${turmaC}`);


function retornarArray(...args: number[]): number[]{
  return[...args];
}

const numeros = retornarArray(1,2);
console.log(numeros);