const resultado = nota => nota >= 8 ? 'Passou' : 'Lascou';

console.log(resultado(7.9));
console.log(resultado(9))


// function nota (nota) {
//     se nota >= 8 'passou'S
//     se nota < 8 'lascou'
// }

const status = comer => comer == 'boa' || comer == 'cheirosa' ? 'Pode Comer' : 'Não Come'; // if = '?' e o else = ':'

console.log(status('estragado'));
console.log(status('boa'));
console.log(status('cheirosa'));

function qualidade (qualidade) {
    if (qualidade == 'cheirosa') {
        return 'Pode Comer'
    }
    if (qualidade == 'boa') {
        return 'Pode comer'
    }
    if (qualidade != 'cheirosa') {
        return 'Não Come'
    }
}

console.log(qualidade('horrivel'));
console.log(qualidade('boa'));
console.log(qualidade('cheirosa'));