function tratarErroELancar(erro) {



    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Data
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroELancar(error)
    } finally {
        console.log('final  ')
    }
}


const obj = {logradoura :'Rosquinha'}
imprimirNomeGritado(obj)