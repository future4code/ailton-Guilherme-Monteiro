fraconst estudante = {
    nome: 'Julia Moniz', 
    cor_favorita: 'rosa', 
    esta_estudando: true,
    linguagens: ['HTML','CSS', 'JS'],
    falar: () => {
        console.log("Gratidão!")
    }
}

// console.log(estudante.linguagens[2]);

// estudante.falar()

// exercicio 1 

const filme = {
    direcao: "Fulano de Tal",
    nome: "Objetos 2: O retorno",
    ano: 2022,
    elenco: ["Julia", "Myllena", "Aloisio", "Tiago"],
    assistiu: true
}

filme.personagens = ["Anitta", "Britney", "Belo", "Roberto Carlos"];

// console.log(`${filme.elenco[0]} interpreta ${filme.personagens[0]}`);
// console.log(`${filme.elenco[1]} interpreta ${filme.personagens[1]}`);
// console.log(`${filme.elenco[2]} interpreta ${filme.personagens[2]}`);
// console.log(`${filme.elenco[3]} interpreta ${filme.personagens[3]}`);

// filme.elenco[0] = 'Xuxa';

// console.log(filme);

// console.log(`O nome do filme é ${filme.nome}.
// Seus personagens são: ${filme.personagens[0]}, ${filme.personagens[1]},
// ${filme.personagens[2]}, ${filme.personagens[3]}`)



// console.log(filme["elenco"][2]);





// console.log(filme.direcao);
// console.log(filme.nome);
// console.log(filme["ano"]);
// console.log(filme["elenco"]);
// console.log(filme["assistiu"]);


// João Pedro, 21, Rock

const pessoa = {
    nome: "João Pedro",
    idade: 21,
    genero_musical: 'Rock',
}

// console.log(`O nome da pessoa é ${pessoa.nome}, 
// ela tem ${pessoa.idade} anos de idade 
// e gosta muito de ${pessoa.genero_musical}`);



const paiPet =  {
    nome: 'Vitor Hugo',
    pet: {
        nome: "Wanda",
        raca: "Vira Lata",
        idade: 3
    }
}

// console.log(paiPet.pet.raca);



const alunos = [
    {nome: "Wilson Castro", signo: "Aquário"},
    {nome: 'Lincoln Ribeiro', signo: "Leão"},
    {nome: 'Mayara', signo: "Aries"}
]

// console.log(alunos[1].nome);

const curso = {
    nome: 'Curso de Culinaria',
    pratos: ['batata assada', 'salmão grelhado', 'coxinha']
}

curso.preco = 0.50;

// console.log(curso);




const usuario = {
    nome: 'Igor',
    idade: 22,
    email: 'igor@programador.com'
}

console.log(usuario);

const novoUsuario = {
    ...usuario,
    nome: 'Vanessa',
    sobrenome: 'Ferreira'
}

// console.log(novoUsuario);

mamiferos = ['vaca', 'cachorro', 'gato'];

animais = [...mamiferos, 'peixe', 'passarinho'];

// console.log(animais);

function transforma(obj) {
    const novoObj = {
        ...obj,
        comidas: ['acarajé', 'pizza', 'coxinha'], 
        melhor_amigo: {
            nome: 'Eduardo',
            idade: 22
        }
    }

    console.log(`O nome da pessoa é ${novoObj.nome} e suas comidas preferidas
    são: ${novoObj.comidas[0]}, ${novoObj.comidas[1]}. Seu melhor amigo
    se chama ${novoObj.melhor_amigo.nome} e ele tem ${novoObj.melhor_amigo.idade} anos.`)
}

transforma(usuario); 

