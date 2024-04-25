function faixaEtaria(idade) {
    if (idade >= 66) {
        return "Idoso"
    } else if (idade > 22 && idade < 65) {
        return "Adulto"
    } else {
        return "Jovem"
    }
}

console.log(faixaEtaria(67));