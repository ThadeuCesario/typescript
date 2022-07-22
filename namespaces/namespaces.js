var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        var PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        var PI = 3.14;
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
// namespace Geometria {
//     export namespace Area {
//         const PI = 3.14;
//         export function circunferencia(raio: number): number {
//             return PI * Math.pow(raio, 2);
//         }
//         export function retangulo(base: number, altura: number): number {
//             return base * altura;
//         }
//     }
// }
var PI = 2.99;
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
console.log(PI);
