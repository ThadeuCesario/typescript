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

  private alterarVelocidade(delta: number): number{
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida= novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if(velocidadeValida){
      this.velocidadeAtual = novaVelocidade;
    }
    else{
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

  }
}