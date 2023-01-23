function pegarEndereco(obj) {
    try {

        console.log ('endereço: ' + obj.endereco.toUpperCase())
    } catch { console.log('Não existe endereço')}
}
const pessoa = {
    //endereco: 'Otavio Bezerra', 
    numero: 30,
    apartamento: 77
}

pegarEndereco(pessoa)