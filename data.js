
const retorna_hora = (data) => {

    if (!data){
        data = new Date();
    }

    x = data.toLocaleTimeString('pt-BR');
    return x
}

data_atual = new Date();
console.log(retorna_hora(data_atual));


const data_formatada = (data) =>{
    if(!data){
        data = new Date();
    }

    return data.toLocaleDateString('pt-BR');
}

data_atual = new Date();
console.log(data_formatada(data_atual));



