aleatorios = [1,3,5,10,24,45,52,5,7,18,2,29,12,16,20]
const valorInicial = 0;



const acumulador = aleatorios.reduce(function(acum,valor){
    return acum += valor;
}, valorInicial);

console.log(acumulador);


const acumuladorPares = aleatorios.reduce(function(acum,valor){
    if(valor % 2 === 0){
        acum += valor;
    }
    return acum;
}, valorInicial);

console.log(acumuladorPares);

const acumuladorImpares = aleatorios.reduce(function(acum,valor){
    if(valor % 2 !== 0){
        acum += valor;
    }
    return acum;
}, valorInicial);

console.log(acumuladorImpares);

const pessoas = [
    {nome:'Victor', idade:35},
    {nome:'Fulano', idade:20},
    {nome:'Rafaella', idade:23},
    {nome:'Kallyna', idade:34},
    {nome:'Maiara', idade:26},
]

const somaIdade = pessoas.reduce(function(acum,pessoa){
    acum += pessoa.idade;
    return acum;
});

