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

// Class com Generics
abstract class OperacaoBinaria<T,R> {
    constructor(public operando1: T, public operando2: T) {}

    abstract executar(): R;
}

// console.log(new OperacaoBinaria('Bom', ' ndia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, 'opa').executar());

class Somabinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2;
    }
}

console.log(new Somabinaria(3, 4).executar());

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let {dia, mes, ano} = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }

    executar(): string {
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

class Fila<T> {
    constructor(public fila: T[]) {}

    entrar(elemento: T): void {
        this.fila.push(elemento);
    }

    proximo(): void {
        this.fila.shift();
    }

    imprimir(): void {
        console.log(this.fila);
    }
}

const fila1 = new Fila<string>([]);
fila1.entrar('Thadeu');
fila1.entrar('Karina');
fila1.entrar('Meggy');
fila1.proximo();
fila1.entrar('André');
fila1.imprimir();


class FilaCoder<T> {
    private fila: Array<T>;

    constructor(...args: T[]) {
        this.fila = args;
    }

    entrar(elemento: T) {
        this.fila.push(elemento);
    }

    proximo(): T | null {
        if(this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        return null;
    }

    imprimir() {
        console.log(this.fila)
    }
}

const filaDaCoder = new FilaCoder<string>('Gui', 'Pedro', 'Ana', 'Lu');
filaDaCoder.imprimir();
filaDaCoder.entrar('Rafael');
filaDaCoder.imprimir();
console.log(filaDaCoder.proximo());
console.log(filaDaCoder.proximo());
console.log(filaDaCoder.proximo());
filaDaCoder.imprimir();