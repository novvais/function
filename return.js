//Verificar se uma pessoa é maior de idade

function verificarMaioridade(idade) {
    if(idade >= 18) {
        return true
    } else {
        return false
    }
}

const valorRetornadopelafuncao = verificarMaioridade(20) //Fazer isso é como criar uma Let dentro da function
console.log(valorRetornadopelafuncao)