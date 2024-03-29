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
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Thadeu', 'Karina', 'Meggy']);
imprimir([
    { nome: 'Thadeu', idade: 27 },
    { nome: 'Karina', idade: 29 },
    { nome: 'Meggy', idade: 1 }
]);
imprimir([
    { nome: 'Thadeu', idade: 27 },
    { nome: 'Karina', idade: 29 },
    { nome: 'Meggy', idade: 1 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom', ' ndia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, 'opa').executar());
class Somabinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new Somabinaria(3, 4).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Desafio Classe File
// Atributo: fila (Array)
// métodos: entrar, próximo, imprimir
class Fila {
    constructor(fila) {
        this.fila = fila;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        this.fila.shift();
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila1 = new Fila([]);
fila1.entrar('Thadeu');
fila1.entrar('Karina');
fila1.entrar('Meggy');
fila1.proximo();
fila1.entrar('André');
fila1.imprimir();
class FilaCoder {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        return null;
    }
    imprimir() {
        console.log(this.fila);
    }
}
const filaDaCoder = new FilaCoder('Gui', 'Pedro', 'Ana', 'Lu');
filaDaCoder.imprimir();
filaDaCoder.entrar('Rafael');
filaDaCoder.imprimir();
console.log(filaDaCoder.proximo());
console.log(filaDaCoder.proximo());
console.log(filaDaCoder.proximo());
filaDaCoder.imprimir();
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado)
            encontrado.valor = par.valor;
        else
            this.itens.push(par);
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=genericos.js.map