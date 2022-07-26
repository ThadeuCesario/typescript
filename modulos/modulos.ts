import { areaRetangulo } from './retangulo';
// import { areaCircunferencia } from './circunferencia';
import { areaCircunferencia as circ} from './circunferencia';

console.log('modulo carregado...')
console.log(areaRetangulo(7, 8));
console.log(circ(2));

const {digaOi} = require('./novo'); 
console.log(digaOi('Thadeu'))