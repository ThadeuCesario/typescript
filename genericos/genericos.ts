function echo(objeto: any) {
    return objeto;
}

console.log(echo('João'));
console.log(echo(27));
console.log(echo({nome: 'João', idade: 27}));

// Usando Generics

function echoMelhorado<T>(objeto: T): T {
    return objeto;
}

console.log(echoMelhorado('João').length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({nome: 'João', idade: 27}));

// Generics disponíveis na api
const avaliacoes: Array<number> = [10, 8, 7];
avaliacoes.push(8.6);
// avaliacoes.push('4.5');
console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['Thadeu', 'Karina', 'Meggy']);
imprimir<{nome: string, idade: number}>([
    {nome: 'Thadeu', idade: 27},
    {nome: 'Karina', idade: 29},
    {nome: 'Meggy', idade: 1}
]);

type Aluno = {nome: string, idade: number};

imprimir<Aluno>([
    {nome: 'Thadeu', idade: 27},
    {nome: 'Karina', idade: 29},
    {nome: 'Meggy', idade: 1}
]);

// Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho:Echo = echoMelhorado;
console.log(chamarEcho<string>('Alguma coisa'));