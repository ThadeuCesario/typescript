function logarClasse(construtor: Function) {
    console.log(construtor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string, b?: number }) {
    return function(_: Function): void {
        console.log(obj.a + ' ' + obj.b);
    }
}

// @logarClasse //Esse decorator será chamado somente quando a classe for carregada
// @decorator({a: 'Teste', b: 123})
// @logarClasseSe(true)
@logarObjeto
class Eletrodomestico {
    constructor() {
        console.log("novo.....")
    }
}

type Construtor = {new(...args: any[]): {}} // Construtor mais genérico possível

function logarObjeto(construtor: Construtor) {
    console.log("Carregado...");
    return class extends construtor {
        constructor(...args: any[]) {
            console.log("Antes....");
            super(...args);
            console.log("Depois....");
        }
    }
}

new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico();