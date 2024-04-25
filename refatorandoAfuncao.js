const pessoa = {
    nome: "Eduardo",
    idade: 19,
    profissao: "Estudante"
}

apresentacao(pessoa)

const pessoa1 = {
    nome: "Jose",
    idade: 56,
    profissao: "Marceneiro"
}

apresentacao(pessoa1)

const pessoa2 = {
    nome: "Elaine",
    idade: 47,
    profissao: "Professora"
}

apresentacao(pessoa2)

function apresentacao(pessoa) {
    if (pessoa.idade >= 65) {
        console.log(`Meu nome é ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
    } else if (pessoa.idade >= 25 && pessoa.idade <= 64) {
        console.log(`Meu nome é ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
    } else {
        console.log(`Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
    }
}