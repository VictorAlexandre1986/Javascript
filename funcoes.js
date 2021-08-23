//Function hoisting
function saudacao(){
    console.log('Bom dia');
}


//Function expression
const soma = function (a,b) {
    return (a+b);
}

//Arrow function
const multiplicacao = (a,b) =>{
    return (a*b);
}  

//Dentro de um objeto

const obj = {
    falar(){
        console.log('Estou falando!!!');
    }
}

//Argumentos
let objeto = {
    nome:'Victor',
    sobrenome:'Alexandre',
    idade:35
};
function funcao({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);
}
funcao(objeto);




let vetor = [1,2,3]
function funcao2([valor1,valor2,valor3]){
    console.log(valor1,valor2,valor3)
}
funcao2(vetor)



function conta(operador,acumulador,...valores){
    for(let numero of valores){
        if(operador==='+') acumulador += numero
        if(operador==='-') acumulador -= numero
        if(operador==='*') acumulador *= numero
        if(operador==='/') acumulador /= numero
    }
    console.log(acumulador);
}
conta('+',1000,1,2,3,4,5,6,7,8,9)

