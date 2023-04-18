const retorna_hora = (data) => {

    if (!data){
        data = new Date();
    }

    x = data.toLocaleTimeString('pt-BR');
    return x
}

function intervalTempo(){
    console.log(retorna_hora())
}

setInterval(intervalTempo,1000)

//----------------------------------------------------------------------------------------------------------------------------
//Com função anonima

const retorna_hora1 = (data) => {

    if (!data){
        data = new Date();
    }

    x = data.toLocaleTimeString('pt-BR');
    return x
}

setInterval(function(){
    console.log(retorna_hora1())
})