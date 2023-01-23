let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
    // contador=contador+1 
    // contador+=1
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.1]
for(let i = 0; i <= 4; i++) {
    console.log(`valor: ${notas[i]}`)
}

console.log('/////////////////////////')

for(let i = 4; i >= 0; i--) {
    console.log(`valor: ${notas[i]}`)
}    

console.log('/////////////////////////')

for(let i = 0; i < notas.length; i++) {
    console.log(`valor: ${notas[i]}`)
}

console.log('////////////////////////')
console.log(notas.length);
console.log(notas[notas.length -2])