const dados = {
    nome: "Danilo",
    idade: 23,
    profissao: "Tiktoker",
    altura: 1.70
}

function apresentacao(pessoa) {
    if (dados.idade >= 18) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)
    } else if (dados.idade < 18) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)
    }
}

apresentacao(dados)
