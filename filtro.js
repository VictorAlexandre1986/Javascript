aleatorios = [1,3,5,10,24,45,52,5,7,18,2,29]

const callback = function(valor){
    if(valor<20){
        return true;
    }
}

//Utilizando um função externa como callback
const ValoresMenoresQue20 = aleatorios.filter(callback);

console.log(ValoresMenoresQue20);
console.log('')
//----------------------------------------------------------

//Utilizando uma funcao interna
const ValoresMenoresQue10 = aleatorios.filter(function(valor){
    if(valor<=10){
        return true;
    }
})

console.log(ValoresMenoresQue10);
console.log('')
//------------------------------------------------------------


//utilizando uma função interna reduzida
const valoresFiltrados = aleatorios.filter(valor => valor>20)

console.log('')
//-------------------------------------------------------------

//Pegando o indice dos elementos 
const valoresFiltrados2 = aleatorios.filter(function(valor,indice){
    if(valor>15){
        console.log(`Valor = ${valor}, indice = ${indice}`)
        return true
    }
})

console.log('')
//--------------------------------------------------------------

const pessoas = [
    {nome:'Victor', idade:35},
    {nome:'Fulano', idade:20},
    {nome:'Rafaella', idade:23},
    {nome:'Kallyna', idade:34},
    {nome:'Maiara', idade:26},
]

const trintao = pessoas.filter(function(pessoa){
    return pessoa.idade>=30;
})

console.log(trintao)