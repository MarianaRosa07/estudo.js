function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')





console.log('-----------')
console.log('-----------')
console.log('EX1 passou')

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * max + min)
}

const listaCompras = ['ovo', 'hamburguer', 'alface', 'macarrao', 'nada'];
const valorMaximo = 5
const valorMinimo = 0
let i = gerarNumeroAleatorio(valorMinimo,valorMaximo);

while (listaCompras[i] != 'nada') {
    console.log(`Entrou o valor ${listaCompras[i]}`)
    i = getInteiroAleatorioEntre(valorMinimo,valorMaximo);
    console.log(`Saiu o valor ${listaCompras[i]}`)
}
console.log('passou')