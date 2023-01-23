const notas = [2.3, 3.3, 4.5, 5.9]

for(let i = 0; i <= 3; i++) {
    console.log(`nota: ${notas[i]}`)
}

console.log('///////////////////')

for(let i = 0; i < notas.length; i++) {
    console.log(`nota: ${notas[i]}`)
}

console.log('///////////////////')

for(let i in notas) { //somente usado para sequencia crescente
    console.log(`nota: ${notas[i]}`)
}  

console.log('///////////////////')

const pessoa = {
    nome: 'Mariana',
    endereço: 'Otavio Correia',
    telefone: '123-321',
    pet: 'Vevena'

}
for(let i in pessoa) {
       console.log(`${[i]} = ${pessoa[i]}`)
    
}