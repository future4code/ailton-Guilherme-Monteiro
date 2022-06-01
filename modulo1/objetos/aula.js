// const numerosDigitados = []
// let numeroUsuario = +prompt("Digite um numero:")
// numerosDigitados.push(numeroUsuario)

// while (numeroUsuario !== 0) {
//   numeroUsuario = +prompt("Digite um numero:")

//   numerosDigitados.push(numeroUsuario)
// }

// console.log(numerosDigitados)

// let contador = 0
// let soma = 0

// while (contador < numerosDigitados.length) {
//     soma = soma = numerosDigitados[contador]

//     contador = contador + 1
// }

// console.log(soma)


// for(let contador = 0; contador < numerosDigitados.length; contador++) {
//     soma = soma = numerosDigitados[contador]
// }


// const maior = (arr) => {
//     for(let i = 0; i < arr.length; i++)
//     const elemento = arr [i]
//     if (elemento > maior){
//     maior = elemento
// }
// }


const numeros = [1, 2, 5, 8, 10, 11, 13, 15, 20]

const retornaPares = numeros.filter((numero) =>  {
    return numero % 2 === 0
}
)

console.log(retornaPares)