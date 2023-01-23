function area(largura, altura) {
    const area = largura * altura
    if (area >= 10 && area <= 20) {
        console.log(`Valor da area é: ${area}m2.`)
    } else if(area > 20) {
        console.log(`Área de construção acima do permitido: ${area}m2.`)
    } else {
        console.log(`Área da contrução abaixo do permitido: ${area}m2.`)
    }
}

area(2, 4)