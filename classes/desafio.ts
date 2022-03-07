// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
 
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
 
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
 

class Moto {
    public nome: string;
    public velocidade: number = 0;

    constructor(nome: string) {
        this.nome = nome;
    }

    buzinar(): void {
        console.log('Toooooooooot!')
    }

    acelerar(delta: number) {
        this.velocidade = this.velocidade + delta;
    }
}

var moto = new Moto('Ducati');
console.log(moto);
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
console.log(moto);
 
// Exercício 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }
 
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
// console.log(retangulo.area())

class Objeto2D {
    protected base: number = 0;
    protected altura: number = 0;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
} 

class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura
    }
}

var retangulo: Retangulo = new Retangulo(10, 7);
console.log(retangulo);
console.log(retangulo.area());

 
// Exercício 3 - Getters & Setters

class Estagiario {
    private _primeiroNome: string = ''; 

    get nome() {
        return this._primeiroNome;
    }

    set nome(valor: string) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    }
}

const estagiario = new Estagiario();
console.log(estagiario);
estagiario.nome = 'Andre';
console.log(estagiario)



// var estagiario = {
//     _primeiroNome: ''
// }
 
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
 
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)