const letras = ['a','b','c','d','e']
letras.unshift('f')
console.log(`Insere no inicio ${letras}`)
letras.shift();
console.log(`Remove do inicio ${letras}`)
letras.push('f')
console.log(`Insere no fim ${letras}`)
letras.pop()
console.log(`Remove do fim ${letras}`)

//nomes.splice(indice,delete,elem,elem)
//Inserindo na posicao 2
console.log(letras.splice(2,0,'F','G','H'))

//Removendo o ultimo elemento
console.log(letras.splice(-1,1))

//Removendo os dois primeiros elementos
console.log(letras.splice(0,2))

//Removendo o ultimo elemento
console.log(letras.slice(0,-1))

const nome = 'Victor Alexandre Braga Ribeiro'
nomes = nome.split(' ')
console.log(nomes)
console.log(nomes.join(' '))


const nums1 = [0,1,2,3]
const nums2 = [4,5,6,7]

const a = nums1.concat(nums2,[8,9,10],'Victor')
console.log(a)

const b = [...nums1,...nums2, ...[8,9,10],'Victor']
console.log(b)

const numeros = [5,50,80,1,2,3,4,5,6,7,11,15,22,27]



function callbackFilter(valor,indice){
    if (valor>10){
        return true;
    }
}

const filtrados = numeros.filter(callbackFilter)
console.log(filtrados)

const filtrados2 = numeros.filter(function (valor){
    if(valor>10){
        return true
    }
} )


const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Leticia',idade:23},
    {nome:'Victor', idade:35}
]

const nomeGrande = pessoas.filter(function(pessoa){
    if(pessoa.nome.length > 5){
        return true;
    }
})

const velhos = pessoas.filter(function(pessoa){
    if(pessoa.idade > 50){
        return true;
    }
})



console.log(nomeGrande)
console.log(velhos)




