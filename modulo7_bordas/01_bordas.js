const texto = "Romário era um excelente jogador\n, mas hoje é um político questionador"

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) //^ indica início de linha/string
console.log(texto.match(/r$/gi)) //$ indica fim de linha/string

console.log(texto.match(/^r.*r$/gi)) 
//idéia: capturar string que começa e termina com r
//mas retorna null pq ponto não representa \n