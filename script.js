const obj = [
    {
        sentido: 'X',
        horario: 10.45
    },
    {
        sentido: 'X',
        horario: 11.01
    },
    {
        sentido: 'X',
        horario: 11.15
    },
    {
        sentido: 'X',
        horario: 12.10 
    },
    {
        sentido: 'X',
        horario: 13.41
    },
    {
        sentido: 'X',
        horario: 13.45
    },
]

const data = new Date();
const horas = data.getHours();
const minutos = data.getMinutes();
const horasMinutos = [horas, minutos].join(':');
const horasMinutosFormatados = parseFloat(horasMinutos.replace(':' , '.'))
let proxValor = Infinity;

document.getElementById("horario").innerHTML = horasMinutos;

for(let i = 0; i < obj.length; i++){
     if(obj[i].horario > horasMinutosFormatados  && obj[i].horario < proxValor){
        const horarioString = obj[i].horario.toString().replace('.', ':')
        document.getElementById("prox-metro").innerHTML = horarioString;
        proxValor = obj[i].horario;
    }
}