const retorna_hora = (data) => {

    if (!data){
        data = new Date();
    }

    x = data.toLocaleTimeString('pt-BR');
    return x
}

const time = setInterval(function(){
  console.log(retorna_hora())
},1000)

setTimeout(function(){
    clearInterval(5000)
})


//--------------------------------------------------------------------------

setTimeout(function(){
    console.log("Olá mundo!!!")
  },3000)