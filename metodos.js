const pessoa = {
    nome: "Eduardo",
    idade: 19,
    altura: 1.68,
    profissao: "Estudante",
    /*Metodo*/apresentar: function() {
        const faixaEtaria = this.determinarFaixaEtaria(this.idade);

        console.log(`Sou ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}.`)
    },
    determinarFaixaEtaria: function () {
        if (this.idade >= 66) {
            return "Idoso";
        } else if (this.idade > 22 && this.idade < 65) {
            return "Adulto";
        } else {
            return "Jovem";
        }
    }
}

pessoa.apresentar();
console.log(pessoa.determinarFaixaEtaria());