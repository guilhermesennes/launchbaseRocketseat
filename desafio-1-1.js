/*
===========================================================
*****************     CALCULADORA IMC     *****************
===========================================================
*/

const nomeImc = 'Guilherme'
const pesoImc = 95
const alturaImc = 1.60
const sexoImc = 'M'

const imc = pesoImc/(alturaImc * alturaImc)

if (imc >= 30){
    console.log(`${nomeImc}, você está acima do peso`)
} else{
    console.log(`${nomeImc}, você não está acima do peso`)
}

/*
===========================================================
************     CALCULADORA APOSENTADORIA     ************
===========================================================
*/

const nome = 'Guilherme'
const sexo = 'M'
const idade = 75
const contribuicao = 20

if (sexo === 'M'){
    if (!(idade + contribuicao >= 95)){
        console.log(`${nome}, você ainda não pode se aposentar!`)
    } else{
        console.log(`${nome}, você já pode se aposentar!`)
    }
} else{
    if (!(idade + contribuicao >= 85)){
        console.log(`${nome}, você ainda não pode se aposentar!`)
    } else{
        console.log(`${nome}, você já pode se aposentar!`)
    }
}