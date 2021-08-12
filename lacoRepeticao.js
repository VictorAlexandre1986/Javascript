notas = [8,5,10,7]
//For of funciona apenas a objetos iteraveis
for (nota of notas){
    console.log(`Nota : ${nota}`)
}

//For in é usando para percorrer objetos
const pessoa = {
    nome:'Victor',
    idade:35
}

for(var propriedade in pessoa){
    var info = pessoa[propriedade];
    console.log(info)
}












