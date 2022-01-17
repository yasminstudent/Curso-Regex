const texto = "Casa bonita é casa amarela da esquina com a Rua ACASALAR."

const regex = /casa/gi //[ 'Casa', 'casa', 'CASA' ]
const regex2 = /casa bonita/gi //[ 'Casa bonita' ]
console.log(texto.match(regex)) 
console.log(texto.match(regex2))
console.log(texto.match(/a b/)) /*
[
  'a b',
  index: 3,
  input: 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.',
  groups: undefined
]
*/

//quando não tem a flag g, ele retorna também o índice em que o elemento foi encontrado