const obj = [
    {
        sentido: 'Chico da Silva',
        horario: "11.01"
    },
    {
        sentido: 'Chico da Silva',
        horario: "11.17"
    },
    {
        sentido: 'Chico da Silva',
        horario: "11.33"
    },
    {
        sentido: 'Chico da Silva',
        horario: "12.10" 
    },
    {
        sentido: 'Chico da Silva',
        horario: "13.41"
    },
    {
        sentido: 'Chico da Silva',
        horario: "13.45"
    },
]

function horarioAtual(){
    const data = new Date();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    
    const horasMinutos = `${horas}:${minutos.toString().padStart(2, '0')}`;
    const horasMinutosFormatados = parseFloat(horasMinutos.replace(':', '.'));

    let proxValor = Infinity;

    document.getElementById("horario").innerHTML = horasMinutos;

    for(let i = 0; i < obj.length; i++){
        if(obj[i].horario > horasMinutosFormatados && obj[i].horario < proxValor){
            const horarioString = obj[i].horario.toString().replace('.', ':')
            document.getElementById("prox-metro").innerHTML = horarioString;
            proxValor = obj[i].horario;
    }    
}
    const header = document.querySelector('.container-header')
    const calc2 = proxValor - horasMinutosFormatados
    const calc = parseFloat(calc2.toFixed(2))
    if(calc <= 0.15 && calc > 0.10){
        header.classList.toggle('red')
    }
    if(calc <= 0.10 && calc >= 0.03){
        header.classList.toggle('yellow')
    }
    if(calc <= 0.03 && calc >= 0.01){
        header.classList.toggle('green')
    }
}

setInterval(horarioAtual,1000)