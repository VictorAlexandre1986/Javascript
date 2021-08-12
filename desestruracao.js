/**Desustruração de arrays */
const letra = ['A','B','C','D','E','F','G','H','I','J']
const [primeiraLetra, segundaLetra,...resto] = letra 
console.log(primeiraLetra)
console.log(segundaLetra)
console.log(resto)

/**Desustruração de objetos */

const pessoa = {
    nome:'Victor',
    idade:35,
    endereco: {
        rua:'Av Brasil',
        cidade:'São José dos Campos'
    }
};

const { nome,idade } = pessoa;
const {endereco : { cidade }} = pessoa;

console.log(nome,idade)
console.log(cidade)