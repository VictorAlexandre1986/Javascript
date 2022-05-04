const data = new Date();
const dia = data.getDay();


function diaSemana(dia){
    let diaSemana;
    switch(dia){
        case 0:
            diaSemana ="Domingo";
            break;
        case 1:
            diaSemana ="Segunda";
            break;
        case 2:
            diaSemana ="Terça";
            break;
        case 3:
            diaSemana ="Quarta";
            break;
        case 4:
            diaSemana ="Quinta"
            break;
        case 5:
            diaSemana ="Sexta";
            break;
        case 6:
            diaSemana ="Sábado";
            break;
        default:
            diaSemana ="Não existe";
    }
    return diaSemana;
}

console.log(diaSemana(dia));