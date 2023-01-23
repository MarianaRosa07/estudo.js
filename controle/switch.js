const imprimirResultado = function (nota) {
    switch (Math.ceil(nota)) {
        case 10: case 9:
            console.log('Aprovado com louvor!')
            break
        case 8: case 7:
            console.log('Aprovado com sucesso!')    
            break
        case 6: case 5: case 4:
            console.log('Recuperação!')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!')
            break
        default:
            console.log('Nota inválida')                      
    }
}

imprimirResultado(9);
imprimirResultado(8.9);