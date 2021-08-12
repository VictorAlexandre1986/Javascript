const valores = [7.7,8.9,6.3,9.2]
valores[4]=10
console.log(valores.length)
valores.push('oi',null,false,{nome:'Victor'})
console.log(valores.pop())
delete valores[0]
console.log(valores)

var frutas = ['abacaxi','maça','uva']
frutas.forEach(function(frutas){
    console.log(frutas+'!!!');
});


//A função forEach é executada para cada elemento da lista
//A cada iteração o valo da lista é atribuído à variável passa como parametro no callback
numeros = [1,2,3,4,5,6,7,8,9]
numeros.forEach(function(numeros){
    console.log(numeros + 10)
});


// função de callback não precisa ser anonima
function imprimir(numero){
    console.log(numero)
}
numeros.forEach(imprimir)

//Elementos que forem adicionados depois da chamada do método não serão vistos, no console.
var canais=['SBT','Record','TV Aparecida']
canais.forEach(function(canal){
    //Inserido mas não visto
    canais.push('RedeTV')
    console.log(canal)
});


/**Map
 * A função map é util qdo precisamos não somente passar por todos elementos de um array
 * mas também modificá-los.Como map nos devolve uma outra instancia, a lista original 
 * nunca é modificada.
 */

var dobro = numeros.map(function(numero){
    return numero * 2;
});
console.log(dobro);


function triplo(numero){
    return numero * 3
}

var modificado = numeros.map(triplo);
console.log(modificado)

/**Filter
 * O método filter é usado para filtrar nossa lista de acordo com algum critério
 */

var alunos = [
    {nome:'Victor',nota:10},
    {nome:'Xispita', nota:9},
    {nome:'Fifi', nota:8},
    {nome:'Seila', nota:4}
]

var aprovados = alunos.filter(function(aluno){
    return aluno.nota > 5;
});
console.log(aprovados);

/**Find
 * Essa função é particulamente interessante qdo o objetivo é encontrar um item especifico
 * dentro de um array
 */
var alunos = [
    {nome:'Victor'},
    {nome:'Alexandre'},
    {nome:'Braga'},
    {nome:'Ribeiro'}
]

var encontrado = alunos.find(function(aluno){
    return aluno.nome === 'Alexandre';
});

console.log(encontrado);

/**Every
 * A função every valida se todos os elementos de uma array respeitam uma condição*/

nome = [
    {nome:'Victor',idade:35},
    {nome:'Fifi', idade:8},
    {nome:'Xispita', idade:11}
]

let maiorIdade = nome.every(function(aluno){
    return aluno.idade>18
});
console.log('Todos os elementos são maior de idade ? ',maiorIdade)

/**Some
 * Se a tarefa é validar  , se pelo menos um dos elementos de um array satifaz uma dada 
 * condicao, o some é o método perfeito para o trabalho.
 */

var pesoDasMalas = [12,32,21,29]
var temMalaAcimaDoPeso = pesoDasMalas.some(function(pesoDasMalas){
    return pesoDasMalas > 30;
});
console.log('Tem mala acima do peso ? ',temMalaAcimaDoPeso)

/**Reduce
 * É um acumulador
 */

var acumulador = 0

acumulador = numeros.reduce(function(acumulador,numero){
    return acumulador + numero;
});

console.log('Acumulador de valores : ',acumulador)











