class Data {
    // Público por padrão
    constructor(dia:number = 1, mes:number = 1, ano:number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    public dia: number;
    public mes: number;
    public ano: number;
}

const aniversario = new Data(4, 11, 1994);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data // posso omitir os ()
casamento.ano = 2017;
console.log(casamento)
//========================================

class DataEsperta {
    constructor(
        public dia:number = 1, 
        public mes:number = 1, 
        public ano:number = 1970
    ) {}
}

const aniversarioEsperto = new DataEsperta(4, 11, 1994);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta // posso omitir os ()
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

//========================================
class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0,
    ){}
}

const p1 = new Produto('geladeira', 1700.50, 0.1);
const p2 = new Produto('Fogão', 1000);

console.log(p1);
console.log(p2);

class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

        if (velocidadeValida) this.velocidadeAtual = novaVelocidade;
        else if (this.velocidadeAtual > 0) this.velocidadeAtual = this.velocidadeMaxima;
        else if (this.velocidadeAtual < 0) this.velocidadeAtual = 0;

        return this.velocidadeAtual
    }

    public acelerar(): number {
       return this.alterarVelocidade(5);
    }

    public frear(): number {
        return this.alterarVelocidade(-5);
     }        
}

const carro1 = new Carro('Ford', 'Ka', 185);

Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());


Array(50).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());

// Atributos e métodos privados não são transmitidos por herança, precisamos trocar para protected 
class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima);

    }

    public acelerar(): number {
        return this.alterarVelocidade(20);
     }
 
     public frear(): number {
         return this.alterarVelocidade(-15);
      }        
}

const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());


// Getters & Setters
class Pessoa {
    private _idade: number = 0;

    get idade(): number {
        return this._idade;
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor;
        } 
    }
}

const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);

pessoa1.idade = -3;
console.log(pessoa1);

// atributo static está relacionado sempre a classe e não a instancia

class Matematica {
    static PI: number = 3.1416;

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio;
    }
}

// const m1 = new Matematica();
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));

console.log(Matematica.areaCirc(4));


// Classe abstrata (só fazer sentido se outra classe herdar ela)
abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...numeros: number[]): void;

    getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}

let c1 = new Soma();
c1.executar(2,3,4,5);
console.log(c1.getResultado());

c1 = new Multiplicacao();
c1.executar(2,3,4,5);
console.log(c1.getResultado());


class Unico {
    private static instance: Unico = new Unico;
    private constructor() {}

    static getInstance(): Unico {
        return this.instance;
    }

    agora() {
        return new Date;
    }
}

// const errado = new Unico();

console.log(Unico.getInstance().agora());

// Somente Leitura

class Aviao {
    public readonly modelo: string;

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo;
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8';
// turboHelice.prefixo = 'PT-DEF';
console.log(turboHelice)