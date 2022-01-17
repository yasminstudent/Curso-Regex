//Grupos Aninhados: um grupo dentro de outro
const texto = "supermercado hipermercado minimercado mercado"

console.log(texto.match(/(super|hiper|mini)?mercado/g)) //[ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]

//isso é um grupo aninhado
console.log(texto.match(/((su|hi)per|mini)?mercado/g)) //[ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]