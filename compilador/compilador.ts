let canalDois: string = 'Gaveta';
let inscritosDois: number = 12123;

// canal = inscritos;
console.log(canalDois);

// function saudar(isManha: boolean, horas: number): string { //noUnusedParameters
//     let a = 1; // noUnusedLocals
//     let saudacao: string;
    
//     if(isManha) {
//         saudacao = 'Bom dia';
//     } else {
//         saudacao = 'Aproveite o drink'
//     }

//     return saudacao; //strictNullChecks

// }


function saudarNew(isManha: boolean): string { 
    let saudacao: string;
    
    if(isManha) {
        saudacao = 'Bom dia';
    } else {
        saudacao = 'Aproveite o drink'
    }

    return saudacao;

}