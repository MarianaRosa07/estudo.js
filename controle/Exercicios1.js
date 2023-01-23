// Criar uma função que some dois valores recebidos e retorne ele
function soma(a, b) {
        return a + b
}
console.log(soma (2, 3));

// Crie uma função que mostre cada item de uma lista com n itens
const lista = ['mariana', 'ravena', 'dhiego']
for(let i in lista) {
    console.log(`nomes: ${lista[i]}`)
}
for(let i = 0; i < lista.length; i++) {
    console.log(`${i} = ${lista[i]}`)
}    

// Criar uma função que recebe uma lista e retorne a soma de todos os numeros da lista
const numeros = [77, 96, 8, 31, 25]
let resultado = 0
for(let indice=0; indice < numeros.length; indice++) {
    resultado = resultado + numeros[indice]
}
console.log(resultado)

// Crie uma função que valide se existe , se existir mostre qual a posição da lista esta esse palavra esta em uma lista com n itens