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
 * Desafio Produto
 * Atributos: nome, preco e desconto.
 * Criar o construtor
 * Obs 1: Desconto é opcional (valor padrão 0)
 * Obs 2: Criar dois produtos: passando dois e três parametros
 */

 class Product{
   public productName: string;
   public productPrice: number;
   public productDiscount: number;

   constructor(productName: string, productPrice: number, productDiscount: number = 0){
      this.productName = productName;
      this.productPrice = productPrice;
      this.productDiscount = productDiscount;
   }
 }

const celular = new Product('Galaxy s10', 3500, 10);
console.log(celular);

const geladeira = new Product('Geladeira', 1500);
console.log(geladeira);