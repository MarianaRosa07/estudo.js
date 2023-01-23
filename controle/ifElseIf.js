

const imprimirResultado = function (nota) {
    if (nota >= 9 && nota <= 10) {
        console.log('Aprovado com louvor, você tirou: ' + nota + '.')
    }
    else if(nota >= 7 && nota <= 8.99) {
        console.log('Aprovado com sucesso, você tirou: ' + nota + '.')
    }
    else if(nota >= 4 && nota <= 6.99) {
        console.log('Recuperação, você tirou: ' + nota + '.') 
    }
    else if(nota >= 0 && nota <= 3.99) {
        console.log('Reprovado, você tirou: ' + nota + '.')
    }
    else {
        console.log('Nota inválida, você tirou: ' + nota + '.')
    }
}

imprimirResultado(9,5);
imprimirResultado(9);
imprimirResultado(7.5);
imprimirResultado(5);
imprimirResultado(0);
imprimirResultado(14);
