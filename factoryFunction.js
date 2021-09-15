function criaPessoa(nome,sobrenome){
    return { nome, sobrenome };
}

const p1 = criaPessoa('Victor','Alexandre')
console.log(p1)

function criaPessoa2(nome,sobrenome){
    return { 
        nome, 
        sobrenome,
        fala:function(assunto)
        {
            return `${this.nome} está falando ${assunto}`;
        } 
    };
}
 
const p2 = criaPessoa2('Victor','Alexandre','Javascript');
console.log(p2.fala('JS'))




