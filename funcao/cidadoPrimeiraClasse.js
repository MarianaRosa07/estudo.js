// Função em JS é First-Class Object (Citizens)
// Higher-order function

//Criar forma literal
function soma(a, b, c) {
    console.log(a + b * c)  
}

soma(2, 3, 4);

console.log('//////////////')

function soma(a, b) {
    return a + b
};
let aplicacaoGeral = 0;

const aplicacao = soma(200, 300);
console.log(aplicacao);
aplicacaoGeral = aplicacao;

const aplicacao2 = soma(aplicacaoGeral, 500);
console.log(aplicacao2);
aplicacaoGeral = aplicacao2;

function subtrair(a, b) {
    return a - b
}

const resgate = subtrair(aplicacaoGeral, 290)
console.log(resgate);
aplicacaoGeral = resgate
