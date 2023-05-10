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
        horario: 11.17
    },
    {
        sentido: 'X',
        horario: 11.30
    }
]

const data = new Date();
const horas = data.getHours();
const minutos = data.getMinutes();
const horasMinutos = [horas, minutos].join('.');
const horasMinutosFormatados = parseFloat(horasMinutos)

obj.forEach(index => {
    const diferenca = index.horario - horasMinutosFormatados;
    const diferencaFormatado = parseFloat(diferenca.toFixed(2))
    // if(diferencaFormatado > index.horario && diferencaFormatado <= 15){
    //     alert ('passou')
    // } else {
    //     return false
    // }
})

// const diferenca = index.horario - horasMinutosFormatados;
//     const diferencaFormatado = parseFloat(diferenca.toFixed(2))
//     console.log(diferencaFormatado)
//     if(diferencaFormatado == 0.5 || diferencaFormatado < 0.5){
//         alert('deu certo!')
//     }