const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(i in numero) {
    if(i == 6) {
        break
    }
    console.log(`${i} = ${numero[i]}`)
} 