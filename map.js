const valores = [1,5,8,9,12,16,18,20,21]

const callback = function(valor){
    return valor * 2;
}

const dobro = valores.map(callback)
console.log(dobro)


const pessoas = [
    {nome:'Victor', idade:35},
    {nome:'Fulano', idade:20},
    {nome:'Rafaella', idade:23},
    {nome:'Kallyna', idade:34},
    {nome:'Maiara', idade:26},
]

const nomes = pessoas.map(function(pessoa){
    return pessoa.nome;
})

console.log(nomes)

//Removendo um atributo
const idade = pessoas.map(function(pessoa) { 
    return { idade : pessoa.idade }
});
console.log(idade);


//Adicionando um atributo
const comIds = pessoas.map(function(pessoa,indice){
    pessoa.id=indice;
    return pessoa
});
console.log(comIds);


const comIds2 = pessoas.map(function(pessoa,indice){
    const newPessoa = { ...pessoa}
    newPessoa.id=indice;
    return newPessoa
});
console.log(comIds2);
