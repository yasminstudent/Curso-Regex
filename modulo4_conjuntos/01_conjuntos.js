const texto = "1,2,3,4,5,6a.b c!d?e[f"

//para definir uma classe (ou conjunto) de caracteres usa []
const regexPares = /[02468]/g //busca por: 0 ou 2 ou 4 ou 6 ou 8 (não precisa ter todos e nem ser nessa ordem p/ dá match)
const regexErradaPares = /02468/g  //nesse caso não encontra nada, pois não existe essa sequência na string
console.log(texto.match(regexPares))

const texto2 = "João não vai passear na moto."
const regexComESemAcento = /n[aã]./g //ele dá match tanto em: na seguido de algo, quanto em: nã seguido de algo
console.log(texto2.match(regexComESemAcento))