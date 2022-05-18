//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
// 1.
// A) Esse código identifica se um número é ímpar ou par por meio da sobra da divisão
// b)Para os números pares
// c)Para os números ímpares

// 2.
// a)Para identificar o preço de cada fruta
// b)Será 2.25
// c)5.5

// 3.
// a)Guardando o valor de um prompt dentro de uma variável e transformando-o em um number
// b)10: Esse número passou no teste  -10: Essa mensagem é secreta!!!
// c) caso o valor do prompt seja 0 hocorrerrá erro, pois não há nehuma intrução no código para o que fazer nessa situação

//EXERCICIOS DE ESCRITA DE CÓDIGO
//1.
//  const idadeUsuario = Number(prompt("Qual é sua idade?"))

//  function idadeMinima (){
//      if(idadeUsuario >= 18) {
//          console.log("Você pode dirigir")
//      }
//      else console.log("Você não pode dirigir.")
//  }

//  idadeMinima(idadeUsuario)

 //2.
//  const turno = prompt("Digite m, v ou n para indicar o turno de estudo")

//  function turnoEstudo (){
//      if (turno === "m"){
//          console.log("Bom dia!")
//      }
//     else if (turno === "v") {
//      console.log("Boa tarde!")
//      }
//      else (turno === "n")
//      console.log("Boa noite!")
// }

//  turnoEstudo(turno)

//3.
//  const turno2 = prompt("Digite m, v ou n para indicar o turno de estudo")

//  switch (turno2) {
//      case "m":
//      console.log("Bom dia!")
//      break
//      case "v":
//      console.log("Boa tarde!")
//      break
//      case "n":
//      console.log("Bom noite!")
//  }

//4. 

const genero = prompt("Qual o gênero do filme que você vai assistir?")
const valor = Number(prompt("Você deseja pagar até que valor no ingresso?"))

function valorgenero (cinema) {
    if(genero !== "fantasia" && valor >= 15)
        return"Bom filme!"
    
    else return "Escolha outro filme :("
}

console.log(valorgenero)

