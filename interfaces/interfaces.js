"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Karina';
}
const pessoa = {
    nome: 'Eric',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: 'Eric Cartman', idade: 27, altura: 1.75});
// saudarComOla({nome: 'Kyle'});
pessoa.saudar('Cartman');
// Usando classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
class RealA {
    a() { }
}
class RealAB {
    a() { }
    ;
    b() { }
    ;
}
class RealABC {
    a() { }
    ;
    b() { }
    ;
    c() { }
    ;
}
class AbstrataABD {
    a() { }
    ;
    b() { }
    ;
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
//# sourceMappingURL=interfaces.js.map