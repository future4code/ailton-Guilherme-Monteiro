
const verificaImpar = (numero, imprime) => {
    if (numero % 2 !== 0){
        imprime(numero)
    }

}  

verificaImpar(7, function (numero) {
    console.log(`Esse numeor ${numero} é impar`)
}
)


