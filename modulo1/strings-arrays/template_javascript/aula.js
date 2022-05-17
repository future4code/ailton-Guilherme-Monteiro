// const estudante ={
//     nome: "Guilherme",
//     cor_favorita: "Preto",
//     esta_estudando: true,
//     linguagens: ["HTML", "CSS", "JS"],
//     falar: () => {
//         console.log("Olá")
//     }
// }





// const filme ={
//     direcao: "nao sei",
//     nome: "vingadores",
//     lancamento: 2019,
//     assistiu: true,
//     atores: ["Xuxa", "Ator2", "Ator3", "Ator4"],
//     personagens: ["Homem Aranha", "Hulk", "Wanda", "Visao"]
    
// }

// console.log(`${filme.atores[0]} interpreta ${filme.personagens[0]}`)
// console.log(`O nome do filme é ${filme.nome}. Seus personagens são ${filme.personagens[0]}, ${filme.personagens[1]} e ${filme.personagens[2]}}`)



// const gui = {
//     nome: "Guilherme",
//     idade: 19,
//     genero: "Masculino",
//     genero_musical: "Rap"
// }
// console.log(`O nome da pessoa é ${gui.nome}, ela tem ${gui.idade} anos e gosta muito de ${gui.genero_musical}.`)

// const paiPet = {
//     nome: "Guilherme",
//     pet: {
//         nome: "Zeca",
//         raca: "Vira Lata",
//         idade: 3 
//     }
// }

// console.log(paiPet.pet.raca)

// const alunos = [
//     {nome: "Guilherme Emanoel", signo: "Virgem"},
//     {nome: "Wilson Castro", signo: "Leão"},
//     {nome: "Mayara", signo: "Aries"}
// ]

// console.log(alunos[1])

// const curso = {
//     nome: "Curso de culinária",
//     pratos: ["Batata assada", ]
// }

// const usuario = {
//     nome: "Guilherme",
//     idade: 19,
//     email: "fodase"
// }

// const novoUsuario = {
//     ...usuario,
//     nome: "igor"
// }

// console.log(novoUsuario)

// mamiferos = ["Vaca", "Cachorro", "gato"]

// animais = [...mamiferos, " "] 


// const pessoas = {
//     nome: "Guilherme",
//     comidasPreferida: ["Macarrão", "Feijoada", "Lasanha"],
//     melhorAmigo = {
//         nome1: "Pedro",
//         idade: 19,
//     }
// }

// function frase () {
//     console.log(`O nome da pessoas é ${pessoas.nome} e suas comidas preferida são ${comidasPreferida}. Seu melhor amigo se chama ${pessoas.melhorAmigo.nome1} e tem ${pessoas.melhorAmigo.idade}`)
// }

// return frase






function transforma (objeto) {
    const novoObj = {
        ...obj,
        comidas: ["Lasanha", "Feijoada", "Churrasco"],
        melhorAmigo: {
            nome: "Pedro",
            idade: 20
        }
    }
    console.log(`O nome da pessoa é ${novoObj.nome} e suas comidas preferidas são: ${novoObj.comidas[0]}, ${novoObj.comidas[1]} e ${novoObj.comidas[2]}. Seu melhor amigo se chama ${novoObj.melhorAmigo.nome} e tem ${novoObj.melhorAmigo.idade} anos`)
}



