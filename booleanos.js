//Convertendo um numero para um valor booleano ,negando duas vezes
let isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log('Pra finalizar')
console.log(!!('' || null || 0 || 'epa'))