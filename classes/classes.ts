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
    public acelerar(): number {
        return this.alterarVelocidade(20);
     }
 
     public frear(): number {
         return this.alterarVelocidade(-15);
      }        
}

const f40 = new Ferrari('Ferrari', 'F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
