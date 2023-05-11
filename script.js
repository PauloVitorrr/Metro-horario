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
        horario: 14.10
    }
]

const data = new Date();
const horas = data.getHours();
const minutos = data.getMinutes();
const horasMinutos = [horas, minutos].join(':');
const horasMinutosFormatados = parseFloat(horasMinutos)


document.getElementById("horario").innerHTML = horasMinutos;

const max = obj.sort((a,b) => a.horario - b.horario)
                .find(item => item.horario > horasMinutosFormatados);

const y = [max.horario].toString().replace("." , ":")

document.getElementById("prox-metro").innerHTML = y;
console.log(max)