const texto = "Casa bonita é casa amarela da esquina com a Rua ACASALAR."

const regex = /casa/gi
const regex2 = /casa bonita/gi
console.log(texto.match(regex))
console.log(texto.match(regex2))
console.log(texto.match(/a b/))

//quando não tem a flag g, ele retorna também o índice em que o elemento foi encontrado