//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
// 1.
// A) 10
//    50
// B) Não seria impresso nada


// 2.
// a) Essa função pega o texto do usuário e coloca toda letras em minusculo e identificará se existe a palavra cenoura no texto, retornado com true ou false

// b) 
// i. eu gosto de cenoura
//    true
// ii. cenoura é bom pra vista 
//    false
// iii. cenouras crescem na terra  
//    false


//EXERCICIOS DE ESCRITA DE CODIGO

// 1. a) 
function imprimirMensagem () {
    console.log("Eu sou Guilherme, tenho 19 anos, moro em São Paulo e sou estudante.")
}

console.log(imprimirMensagem)
//b)
const nome = "Guilherme"
const idade = "19"
const cidade = "São Pauulo"
const ocupacao = "estudante"


function imprimirMensagem1 (nome, idade, cidade, ocupacao) {
    return `Eu sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}.`
}
const informacao = imprimirMensagem("Guilherme", 19, "São Paulo")
console.log(informacao)

//2) a)

let somaNumeros = function (num1, num2) {
    
    return num1 + num2
}

console.log(somaNumeros)

//b)

const numero1 = 2
const numero2 = 3

let comparaNumeros1 = function (num1, num2) {
    return num1 > num2
}

console.log(comparaNumeros1(numero1, numero2))

//c)

const numero = 4

let parImpar = function(num){
    return num % 2 === 0
}

console.log(parImpar(numero))

//d)

function mensagem (guilherme) {
    console.log (`A palavra é ${guilherme.toUpperCase()} e la tem ${guilherme.length} letras.`)
}
console.log(mensagem("Navio."))

mensagem("Navio.")

