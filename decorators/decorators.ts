@logarClasse //Esse decorator será chamado somente quando a classe for carregada
class Eletrodomestico {
    constructor() {
        console.log("novo.....")
    }
}


function logarClasse(construtor: Function){
    console.log(construtor);
}