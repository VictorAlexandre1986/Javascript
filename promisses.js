function falar(frase){
    return new Promise((resolve,reject)=>{
        resolve(frase)
    })
}
falar('Bom dia')
    .then(frase => frase.concat('!!!'))
    .then(outrafrase => console.log(outrafrase))



function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(frase);
        },segundos*1000)
    })
}

falarDepoisDe(3,'Que legal')
    .then(frase => frase.concat('!!!'))
    .then(outraFrase => console.log(outraFrase))


    let p = new Promise(function(cumprir){
        cumprir([1,2,3,4,5,6])
    })

    p.then(function(valor){
        console.log(valor)
    })





