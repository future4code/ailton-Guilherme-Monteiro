// let condicao1 = true

// if (condicao1) {
//     console.log("Entrou no if")
// }

// let numero1 = Number(prompt("Insira um numero aqui"))
// let numero2 = Number(prompt("Insira um numero aqui"))



// const comparaNumeros = (num1, num2) => {
//     if (num1 === num2) {
//         console.log("Os numeros são iguais!")
//     }
//     else {
//         console.log("Os numeros são diferente!")
//     }
//     if (num1 > num2) {
//         console.log("O numero 1 é maior que o numero 2")
//     }
//     else {
//         console.log("São diferentes")
//     }
// }

// comparaNumeros(numero1, numero2)

// const comparaNumeros = (num1, num2) => {
//     if(num1 === num2) {
//         console.log("São iguais")
//     }
//     else if(num1 > num2) {
//         console.log("Num1 maior que num2")
//     } 
//     else if (num1 < num2){
//         console.log("Num1 é menor que num2")
//     }
//     else {
//         console.log("Deu ruim")
//     }
// }

// comparaNumeros(numero1, numero2)


// let paisDeOrigem = prompt("Qual o seu país de origerm?")

// switch(paisDeOrigem.toUpperCase()) {
//     case 'Brasil': 
//         console.log("Brasileira")
//         break
//         case 'EUA':
//         console.log("Americana")
//         break 
//         case 'Argentina':
//         console.log(Argentina)
//         break
//         default:
//             console.log("País não indentificado")
// }
    
// const escolhaPokemon = prompt("Escolha um dos pokemons inicias")


// const pokemonInicial = (pokemon) => {
//     switch(pokemon) {
//         case 'bulbasauras':
//             return `${pokemon} é do tipo planta/veneno`
//         case 'squirtle': 
//             return `${pokemon}é do tipo agua`
//         case 'charmander':
//             return `${pokemon} é do tipo fogo`
//         default:
//             return `esse pokemon não é importante`
//     }
// }

// console.log(pokemonInicial(escolhaPokemon))

let condicao1 = true
let condicao2 = false

if(condicao1 && condicao2) {
    console.log("Caiu no if 1")
}

if(!condicao1) {
    console.log("Caiu no if 2")
}  