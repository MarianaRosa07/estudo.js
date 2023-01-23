function soBoaNoticia(nota) {
    if(nota => 7) {
        console.log('Aprovado com ' + nota)
    }
};

soBoaNoticia(8.1);



const valores = [7.7, 8.9, 6.3, 9.2];
function valoresCertos(valor, valorAValidar) {
    console.log(valorAValidar.includes(valor))
    if(valorAValidar.includes(valor)) {
        console.log('Você acertou! ' + valor + ' Parabéns')
    }
    else {
        console.log('You are LOSER!')
    }
};


valoresCertos(7.7, valores);
valoresCertos(8.9, valores);
valoresCertos(1.2, valores);


const inteligentes = ['mariana', 'dhiego', 'anen', 'marilena'];
function pessoasCertas(valor, valorAValidar) {
    if(valorAValidar.includes(valor.toLowerCase())) {
        console.log('Você é inteligente! ' + valor + ' =]')
    }
    else {
        console.log('Você é o idiota do Helio Fernando!!!')
    }
};


pessoasCertas('MARIANA',inteligentes);
pessoasCertas('MarIlEnA', inteligentes);
pessoasCertas('Helio Fernando', inteligentes);


//Retorne todas as opções caso você não seja 


function quemVoceE(pessoa) {
    if(pessoa.toLowerCase() == 'mariana') {
        console.log('Você é sensacional!')
    }
    if(pessoa.toLowerCase() == 'marilena') {
        console.log('Você é chata!')}
    else if(pessoa.toLowerCase() == 'helio fernando') {
        console.log('Você é idiota!')
    }
    else {
        console.log('Você não pertenca a família Rosa.')
    }
};

quemVoceE('MARILENA');
quemVoceE('Dhiego');
quemVoceE('Anen');
quemVoceE('helio Fernando');