"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
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
class DataSmart {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
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
class Product {
    constructor(productName, productPrice, productDiscount = 0) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDiscount = productDiscount;
    }
    resumo() {
        return `${this.productName} custa R$${this.productPrice} (${this.productDiscount * 100}% OFF)`;
    }
}
const celular = new Product('Galaxy s10', 3500, 0.1);
console.log(celular);
console.log(celular.resumo());
const geladeira = new Product('Geladeira', 1500);
console.log(geladeira);
console.log(geladeira.resumo());
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
//# sourceMappingURL=classes.js.map