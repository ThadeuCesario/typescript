interface Humano {
    nome: string;
    idade?: number;
}

function saudarComOla(pessoa: Humano) {
    console.log(`Olá ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Karina'
}

const pessoa = {
    nome: 'Thadeu Munhóz Cesário',
    idade: 27
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({nome: 'Eric Cartman', idade: 27});
saudarComOla({nome: 'Kyle'});