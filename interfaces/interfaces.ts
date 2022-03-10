interface Humano {
    nome: string;
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