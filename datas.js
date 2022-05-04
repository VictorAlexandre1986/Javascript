const data = new Date();

console.log(data.toDateString())
console.log(data.toString())

const data1 = new Date(2022,4,29,19,06,55)
console.log(data1)
const data2 = new Date('2022-4-29 19:06:55')
console.log(data2)




console.log(`o dia do mês : ${data.getDate()}`)
console.log(`dia da semana : ${data.getDay()}`)
console.log(`Ano : ${data.getFullYear()}`)
console.log(`mes : ${data.getMonth()+1}`)
console.log(`Hora  : ${data.getHours()}`)
console.log(`Minutos  : ${data.getMinutes()}`)
console.log(`Segundos  : ${data.getSeconds()}`)


function formatarData(data) {
    const dia =zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}`;
}

function zeroEsquerda(num){
    return num>10 ? num : `0${num}`
}


const dataBrasil = formatarData(data);
console.log(dataBrasil)