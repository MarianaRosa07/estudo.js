//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);

//Funcao com retorno
function soma(a, b = 1) {
    return a + b

}
console.log(soma(2, 3));
console.log(soma(2));

//Armazenando uma funcao arrow em uma variavel
const soma1 = (a, b) => {
    return a + b
}

console.log(soma1(2, 3));

// retorno implícito
const subtracao = (a, b) => a - b
console.log('Resultado:', subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2('Cú!!!');