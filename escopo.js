let z = 5

function some(x, y) {
    return x + y + z; //Você pode usar uma variavel que esta fora do escopo
}

console.log(x) //Da erro por que a var soma está dentro do escopo {} 
