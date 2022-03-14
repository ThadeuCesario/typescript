interface Humano {
    nome: string;
    idade?: number;
    [prop: string]: any; // Propriedades que o atributo pode variar
    saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
    console.log(`Olá ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Karina';
}

const pessoa: Humano = {
    nome: 'Eric',
    idade: 27,
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: 'Eric Cartman', idade: 27, altura: 1.75});
// saudarComOla({nome: 'Kyle'});
pessoa.saudar('Cartman');


// Usando classes...

class Cliente implements Humano {
    nome: string = '';
    ultimaCompra: Date = new Date;
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);

// Interface função
interface FuncaoCalculo {
    (a: number, b: number): number;
}

let potencia: FuncaoCalculo;
potencia = function(base: number, exp: number): number {
    return Math.pow(base, exp);
}

// Herança

interface A {
    a(): void;
}

interface B {
    b(): void;
}

interface ABC extends A, B{
    c(): void;
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {};
    b(): void {};
}

class RealABC implements ABC {
    a(): void {};
    b(): void {};
    c(): void {};
}

abstract class AbstrataABD implements A, B {
    a(): void {};
    b(): void {};
    abstract d(): void;
}

interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString());
}

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();