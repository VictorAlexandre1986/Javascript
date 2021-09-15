notas = [8,5,10,7]
//For of funciona apenas a objetos iteraveis
for (nota of notas){
    console.log(`Nota : ${nota}`)
}


//------------------------------------------

notas.forEach((valor,indice) => {
    console.log(valor,indice)
});

//-------------------------------------------

let cont=0;
while(cont<=10){
    console.log(cont);
    cont++;
}

//--------------------------------------------

do{
    console.log(cont);
    cont++;
}while(cont<=20)

//--------------------------------------------

//For in é usando para percorrer objetos
const pessoa = {
    nome:'Victor',
    idade:35
}

for(var propriedade in pessoa){
    var info = pessoa[propriedade];
    console.log(info)
}












