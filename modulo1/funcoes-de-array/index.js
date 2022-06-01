//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
//1.
//Será impresso o nome, apelido e posição no array na ordem que os itens do objeto se encontram.

//2.
// Será impresso somente os nomes do array

//3.
//Será retornado no console todos os apelidos diferente de Chijo 

// //EXERCICIOS DEESCRITA DE CÓDIGO
// 1.
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// // a)
// const arrayDoguinhos = pets.filter((index) => {
//     return index.nome
// })

// console.log(arrayDoguinhos)

// //b)
// const arraySalsichas = pets.filter((index) => {
//     return index.raca === "Salsicha"
//     // return produto.categoria === 'Limpeza'
// })

// console.log(arraySalsichas)


// 2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a) 

// const arrayItem = produtos.filter ((index) => {
//     return index.nome
// })

// console.log(arrayItem)

//b)

const arrayNomePreco = produtos.filter ((index, item, array) => {
    return {
        nome: item.nome,
        Numberpreco: (item.preco * 0,95)
    }

})
 console.log(arrayNomePreco)
