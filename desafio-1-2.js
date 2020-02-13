/*
===========================================================
***********  CONSTRUÇÃO E IMPRESSÃO DE OBJETOS  ***********
===========================================================
*/

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco:{
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada na ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

/*
===========================================================
*******************  VETORES E OBJETOS  *******************
===========================================================
*/

const programadores = [
    {
        nome: "Guilherme",
        idade: 25,
        tecnologias: [
            {
                nome: 'Python',
                especialidade: 'Data Science'
            },
            {
                nome: 'JavaScript',
                especialidade: 'Web/Mobile'
            },
            {
                nome: 'PHP',
                especialidade: 'Web'
            }
        ]
    },
    {
        nome: "Thiago",
        idade: 33,
        tecnologias: [
            {
                nome: 'Python',
                especialidade: 'Data Science'
            },
            {
                nome: 'JavaScript',
                especialidade: 'Web/Mobile'
            },
            {
                nome: 'PHP',
                especialidade: 'Web'
            },
            {
                nome: 'Java',
                especialidade: 'Back-End'
            }
        ]
    }
]

console.log(`O Programador ${programadores[0].nome} tem ${programadores[0].idade} anos e usa a tecnologia ${programadores[0].tecnologias[0].nome} com especialidade em ${programadores[0].tecnologias[0].especialidade}`)
