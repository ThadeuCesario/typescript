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
console.log(casamentoEsperto)
