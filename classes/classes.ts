class Data{
  //Público por padrão.
  public dia: number;
  public mes: number;
  public ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(4, 11, 1994);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(Data);

/**
 * Se quiseremos criar uma instância de Data, aproveitando os valores padrões, não somos obrigados
 * a utilizar os parenteses. Seguinda a sintaxe:
 * const casamento = new Data;
 * 
 * Porém vou seguir da forma padrão.
 */
const casamento = new Data();
console.log(casamento);
casamento.ano = 2121;
console.log(casamento);

/*************************************/

class DataSmart{
  constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){

  }
}

const aniversarioSmart = new DataSmart(4, 11, 1994);
aniversarioSmart.dia = 4;
console.log(aniversarioSmart.dia);
console.log(DataSmart);

const casamentoSmart = new DataSmart();
console.log(casamentoSmart);
casamentoSmart.ano = 3500;
console.log(casamentoSmart);

/**
 * Desafio 1 - Produto
 * Atributos: nome, preco e desconto.
 * Criar o construtor
 * Obs 1: Desconto é opcional (valor padrão 0)
 * Obs 2: Criar dois produtos: passando dois e três parametros
 */

 class Product{

/**
 * Desafio 2 - Produto
 * Cria método precoComDesconto.
 * Quais são os parâmetros e o retorno?
 * Alterar método resumo para mostrar o preço com desconto.
 */

   public productName: string;
   public productPrice: number;
   public productDiscount: number;

   constructor(productName: string, productPrice: number, productDiscount: number = 0){
      this.productName = productName;
      this.productPrice = productPrice;
      this.productDiscount = productDiscount;
   }

   public resume(): string {
      return `${this.productName} custa R$${this.discountPrice(this.productPrice, this.productDiscount)} (${this.productDiscount * 100}% OFF)`;
   }

   public discountPrice(currentProductPrice : number, currentDiscountProduct: number): number{
     return (currentProductPrice - ((currentProductPrice * currentDiscountProduct)));
   }

   /*
   precoComDesconto(): number{
     return this.productPrice * (1 - this.productDiscount);
   }
   */
 }

const celular = new Product('Galaxy s10', 3500, 0.1);
console.log(celular);
console.log(celular.resume());

const geladeira = new Product('Geladeira', 1500);
console.log(geladeira);
console.log(geladeira.resume());

const notebook = new Product('samsung', 1000, 0.5);
console.log(notebook);
console.log(notebook.resume());

/**
 * Paradigma de objeto, enxerga o mundo como um grande conjunto de objetos e como esses objetos interagem entre si.
 * Por exemplo uma televisão, ela possui atributos que são caracteristicas da TV. Como por exemplo: Altura, largura, profundidade, cores, peso. Tudo isso, são os atributos
 * (características) da televisão. 
 * Juntamente com esses atributos a televisão também possui comportamentos. Os comportamentos são as ações (métodos), então por exemplo: ligar, desligar, mudar de canal, aumentar volume.
 * As ações podem alterar os atributos do objeto.
 * 
 * Lembrando que quando estamos criando métodos dentro de uma classe, para acessarmos os atributos dessa classe. Utilizamos o 'this'. Se não colocar o this,
 * eu não estarei referenciando o atributo. Por tanto ou vou estar trabalhando com o parãmetro passado pela função, ou então vou estar trabalhando com alguma 
 * variável interna daquele método.
 */

 /**************************************/
 /**
  * private => visivel somente dentro da classe
  * O grande objetivo de termos um atributo privado que ninguem consegue acessar, é porque a própria classe Carro, terá total controle de como
  * manipular esse atributo que está private.
  */

class Carro {
  private velocidadeAtual: number = 0;

  constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200){

  }

  protected alterarVelocidade(delta: number): number{
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida= novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if(velocidadeValida){
      this.velocidadeAtual = novaVelocidade;
    }
    else{
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number{
    return this.alterarVelocidade(5);
  }

  public frear(): number{
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro('Ford', 'Ka', 185);
console.log(carro1.acelerar());

/* Hack para chamar uma função várias vezes.
 */

 Array(50).fill(0).forEach(() => console.log(carro1.acelerar()));

 console.log(carro1.frear());

 Array(50).fill(0).forEach(() => console.log(carro1.frear()));

 //SIMULANDO ERROS
 /**
  * Acessando um atributo private e ainda estourando a velocidade máxima suportada.
  * Isso acontece porque o javascript gerado permite esse tipo de ação!
  * Mas podemos configurar nosso typescript para que ele não gere nenhum javascript em caso de erro.
  */
 carro1.velocidadeAtual = 1000;
console.log('atual =>', carro1.velocidadeAtual);

carro1.velocidadeMaxima = 200;
console.log('máxima =>', carro1.velocidadeMaxima);

carro1.alterarVelocidade(150);
console.log('atual ->', carro1.velocidadeAtual);

/**
 * Pilares da orientação à objeto:
 * Encapsulamento, herança, polimorfismo e abstração.
 * Esses são os pilares importantes da orientação a objeto.
 * 
 * 1) Herança -> Capacidade de reusar código.
 * Uma forma muito comum de reutilizarmos código é através da composição, isso é desmembrar
 * objetos grandes e complexos em objetos menos e simples de serem entendidos. 
 * Então toda vez que virmos algo do tipo : 
 * "Um carro TEM UM motor"
 * "Um carro TEM QUATRO portas"
 * Esses tipos de analogias, estamos trabalhando com composição. Isso porque para formar, o
 * objeto carro, precisamos da composição de vários outros elementos menores.
 * 
 * Agora quando temos uma frase "É UM", então muito provavelmente estamos trabalahando com uma relação
 * de herança. Por exemplo: 
 * Por exemplo:
 * "Ferrari É UM carro"
 * Veja que temos uma relação de ferrari com carro, logo a ferrari está herdando de carro.
 * 
 * Veja o exemplo abaixo que eu criei uma classe 'Ferrari' e extendi de Carro. 
 * Então nesse momento eu não preciso copiar o código inteiro da classe de Carro, porque
 * a classe Ferrari já está extendendo esse código.
 * Veja inclusive que logo abaixo já instãnciei uma nova ferrari.
 * 
 * Mas veja que eu sobreescrevi a função acelerar e frear para a classe Ferrari,
 * isso é perfeitamente normal. Temos um detalhe, tanto os atributos, quanto
 * os métodos privados não são transmitidos por herança.
 * Para conseguirmos passar um método por herança precisamos utilizar o modificador de 
 * acesso 'protected'.
 * 
 * Public -> Visível para todo mundo.
 * Private -> Visível somente dentro da classe.
 * Protected -> Além de ser visível dentro da classe, também é transmitido por herança. 
 * 
 * Herança é uma forma de reutilizar código, porém a melhor forma de reutilizar código
 * é a composição.
 */

 class Ferrari extends Carro{
    constructor(marca: string, valocidadeMaxima: number){
      super('Ferrari', marca, valocidadeMaxima);
    }

    public acelerar(): number{
      return this.alterarVelocidade(20);
    }

    public frear(): number{
      return this.alterarVelocidade(-15);
    }
 }

 const f40 = new Ferrari('f40', 324);
 console.log(`${f40.marca}, ${f40.modelo}`);
 console.log(f40.acelerar());
 console.log(f40.frear());

 /**
  * Getters and Setters
  * Uma vantagem do javascript é que não precisamos colocar a nomenclatura getNome()
  * ou setNome(), como acontece por exemplo no java.
  * Basicamente:
  * getter -> leitura do atributo
  * setter -> escrito do atributo
  * 
  * * Uma convenção de quando estamos trabalhando com um atributo privado é utilizar
  * o underline antes do nome do atributo. 
  * Então veja: 
  * private _nome: string = 'Thadeu'
  * 
  * Veja que tenho uma variável private, do tipo string.
  */

  class Pessoa{
    private _idade: number = 0;

    get getIdade(): number{
      return this._idade;
    }

    set setIdade(idade: number){
      if(idade >= 0 && idade <= 120){
        this._idade = idade;
      }
    }
  }

