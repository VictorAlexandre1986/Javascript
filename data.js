const data = new Date();
console.log(data.toString());

const data2 = new Date(2021,3,20,15,14,27)
console.log(data2.toString())

umaDia = 60 * 60 * 24 * 1000

console.log('Dia', data.getDate());
console.log('Mes', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay());
const timestamp = Date.now();
const data3 = new Date(timestamp)
console.log(data3)

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`
}

const data4 = new Date()
const dataBrasil = formataData(data4)
console.log(dataBrasil)


