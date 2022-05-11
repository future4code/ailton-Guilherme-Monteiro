// EXERCICIO 1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)


// a) resultado = true
// b) resultado = false
// c) resultado = false
// d) resultado = Boolean

//EXERCICIO 2

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

/* os valores das variáveis serão juntados e não somados, pois estão como string e não number*/

//EXERCICIOS DE ESCRITA DE CODIGO

// const minhaIdade = prompt ("Qual é sua idade?");
// const idadeAmigo = prompt ("Qual é a idade do seu melhor amigo?");

// const resultado = minhaIdade > idadeAmigo

// console.log("Sua idade á maior que a do seu melhor amigo?", resultado)


// const numeroPar= prompt("Insira um número par aqui.")

// console.log(numeroPar % 2)

//Com numero pares o resultado é sempre 0
//Com numero impares o resultado é sempre 1

// const idadeAnos = prompt("Qual a sua idade em anos?")

// const idadeMeses = idadeAnos * 12
// console.log("A sua idade em meses é de", idadeMeses)

// const idadeDias = idadeAnos * 365
// console.log("A sua idade em dias é de", idadeDias)

// const idadeHoras = idadeAnos * 6760
// console.log("A sua idade em horas é de", idadeHoras)


const primeiroNumero = prompt("Insira um numero aqui")
const segundoNumero = prompt("Insira outro Numero")

const resultado1 = primeiroNumero > segundoNumero
console.log("O primeiro numero é maior que segundo?", resultado1)

const resultado2 = primeiroNumero === segundoNumero
console.log ("O primeiro numero é igual ao segundo?", resultado2)

const resultado3 = (primeiroNumero % segundoNumero) === 0
console.log("O primeiro numero é divisível pelo segundo?", resultado3)

const resultado4 = (segundoNumero % primeiroNumero) === 0
console.log("O segundo numero é divisível pelo primeiro?", resultado4)