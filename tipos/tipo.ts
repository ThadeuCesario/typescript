// tipos implícitos
// string
let nome = 'thadeu';
console.log(nome);
// nome = 12

// numbers
let idade = 27;
// idade = `thadeu`;
idade = 27.5;

console.log(idade);


// boolean
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);


// tipos explicitos;
// Nesse caso como eu não inicializei a variável, o Typescript não inferiu nenhum tipo.
// então essa variável aceita valores dinâmicos. No Typescript esse é o tipo any =)
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = `idade é 34`;
console.log(typeof minhaIdade)

//array
let myHobbies: any[] = ['Estudar', 'Treinar'];
console.log(myHobbies[0]);
console.log(typeof myHobbies);

myHobbies = [10, 20, 30]; //como é um array de any
// myHobbies = 'string';
console.log(myHobbies);


let numberType: number = 123;
// numberType = 'teste';
console.log(numberType);

//Tuplas
let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco);

// Enum (estrutura que definimos valores pré-definidos)
enum Cor {
    Cinza, // 0
    Verde = 100, // 1
    Azul // 2
}

let minhaCor: Cor = Cor.Verde;
console.log("minhaCor", minhaCor);

let minhaCor2: Cor = Cor.Azul;
console.log("minhaCor2", minhaCor2);


let carro: any = 'BMW';
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2019
}


// Funções
// Ao lado da função podemos colocar o tipo de retorno que esperamos dela
function retornaMeuNome(): string {
    // return minhaIdade;
    return nome;
}

console.log('function retornaMeuNome', retornaMeuNome());

// Quando temos uma função que não retorna nada, podemos utilizar o tipo void ;) 
function digaOi(): void {
    console.log('oi');
    // return 'oi';
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

// console.log(multiplicar('ola', 2)); // somente podemos passar number e number como parametros da função
console.log(multiplicar(2,2));


// Tipo função
let calculo: (a: number, b: number) => number;
calculo = multiplicar;
console.log(calculo(5, 5));


//Objetos
let usuarios: {nome: string, idade: number} = {
    nome: 'João',
    idade: 27,
}
console.log(usuarios);

// usuarios = {}

// Desafio Cod3r

const baterPonto = (hora: number): string => hora <= 8 ? 'Ponto normal' : 'Fora do horário'

let funcionarioDesafio: {
    supervisores: string[],
    baterPonto: (hora: number) => string,
} = {
    supervisores: ['Allan', 'Emerson', 'Zizu'],
    baterPonto
}

console.log(funcionarioDesafio.supervisores);
console.log(funcionarioDesafio.baterPonto(7));
console.log(funcionarioDesafio.baterPonto(10));