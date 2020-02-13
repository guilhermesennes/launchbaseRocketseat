
// ===========================================================
// ****************   USUÁRIOS E TECNOLOGIAS  ****************
// ===========================================================

const programadores = [
    {
        nome: 'Guilherme',
        tecnologias: ['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY', 'PHP', 'WORDPRESS', 'VTEX']
    },
    {
        nome: 'Gustavo',
        tecnologias: ['HTML', 'JAVASCRIPT', 'PHP', 'VUE', 'JQUERY', 'VTEX']
    },
    {
        nome: 'Fabio',
        tecnologias: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'C', 'JQUERY', 'VTEX']
    },
    {
        nome: 'Hiago',
        tecnologias: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'VTEX']
    }
]

// for (let i = 0; i < usuarios.length; i++){
//     // console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
// }


// ===========================================================
// *****************  BUSCA POR TECNOLOGIAS  *****************
// ===========================================================

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true;
    }
    return false;
}

for (let i = 0; i < programadores.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(programadores[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O desenvolvedor ${programadores[i].nome} trabalha com CSS`);
    } else {
        console.log(`O desenvolvedor ${programadores[i].nome} não trabalha com CSS`);
    }
}

// ===========================================================
// **************  SOMA DE DESPESAS E RECEITAS  **************
// ===========================================================

const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
]

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas);
    const somaDespesas = somaNumeros(despesas);

    return somaReceitas - somaDespesas;
}

function somaNumeros(numeros){
    //Soma todos os números dentro do array "numeros"
    soma = 0
    for(let numero of numeros){
        soma = soma + numero;
    }
    return soma;
}

for(let usuario of usuarios){
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
    if(saldo > 0){
        console.log(`O usuário ${usuario.nome} tem um saldo positivo de R$${saldo.toFixed(2)}.`)
    } else {
        console.log(`O usuário ${usuario.nome} tem um saldo negativo de R$${saldo.toFixed(2)}.`)
    }
}