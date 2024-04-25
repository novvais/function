function faixaEtaria(idade) {
    if (idade >= 66) {
        determinarFaixaEtaria = "Idoso"
    } else if (idade > 22 && idade < 65) {
        determinarFaixaEtaria = "Adulto"
    } else {
        determinarFaixaEtaria = "Jovem"
    }
}


function apresentacao(pessoa) {

    let determinarFaixaEtaria = faixaEtaria(pessoa.idade)

    console.log(`Meu nome é ${pessoa.nome}, sou um ${determinarFaixaEtaria} de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
}

const pessoa = {
    nome: "Eduardo",
    idade: 19,
    altura: 1.68,
    profissao: "Estudante"
}

apresentacao(pessoa)

const pessoa1 = {
    nome: "Jose",
    idade: 56,
    altura: 1.66,
    profissao: "Marceneiro"
}

apresentacao(pessoa1)

const pessoa2 = {
    nome: "Elaine",
    idade: 47,
    altura: 1.70,
    profissao: "Professora"
}

apresentacao(pessoa2)