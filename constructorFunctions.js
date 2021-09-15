function Pessoa(nome,sobrenome){
    this.nome=nome;
    this.sobrenome=sobrenome;
    this.metodo = function(){
        console.log(this.nome+' sou um método ')
    };
}

const p1 = new Pessoa('Victor','Alexandre')
p1.metodo();
console.log(p1.nome);