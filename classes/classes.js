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
//# sourceMappingURL=classes.js.map