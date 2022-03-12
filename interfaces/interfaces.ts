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
    // pessoa.nome = 'Karina';
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