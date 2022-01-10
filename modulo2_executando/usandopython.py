import re

texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

pattern9 = re.compile('9') #compila a expressão regular (se tiver algo errado no parâmetro passado, o comando irá gerar um erro)
match1 = re.search(pattern9, texto)
print("Posicoes: %s, %s; Valor: %s."%(match1.start(), match1.end(), match1.group(0))) #Posicoes: 18, 19; Valor: 9.


valores = re.findall('[a-f]', texto) #executa a expressão e retorna os elementos encontrados a partir do padrão passado
print("Valores: %s"%valores)