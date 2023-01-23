const mostrarResultado = function(nota) {
    if(nota >= 6) {
        console.log('Aprovado com: ' + nota)
    }
    else {
        console.log('Reprovado')
    }
};

mostrarResultado(6);
mostrarResultado(4);
mostrarResultado(10);