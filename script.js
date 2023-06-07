const obj = [
    {
      sentido: 'Chico da Silva',
      horario: 11.01
    },
    {
      sentido: 'Chico da Silva',
      horario: 11.17
    },
    {
      sentido: 'Chico da Silva',
      horario: 11.33
    },
    {
      sentido: 'Chico da Silva',
      horario: 12.10 
    },
    {
      sentido: 'Chico da Silva',
      horario: 13.41
    },
    {
      sentido: 'Chico da Silva',
      horario: 13.45
    },
  ];
  
  function formatarHorario(hora, minuto) {
    return `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
  }
  
  function horarioAtual(){
      const data = new Date();
      const horas = data.getHours();
      const minutos = data.getMinutes();
      
      const horasMinutosFormatados = horas + minutos / 100;
  
      let proxValor = Infinity;
      let proxHorario = '';
  
      document.getElementById("horario").innerHTML = formatarHorario(horas, minutos);
  
      for(let i = 0; i < obj.length; i++){
          if(obj[i].horario > horasMinutosFormatados && obj[i].horario < proxValor){
              proxValor = obj[i].horario;
              proxHorario = formatarHorario(Math.floor(obj[i].horario), Math.round((obj[i].horario % 1) * 100));
          }
      }
  
      document.getElementById("prox-metro").innerHTML = proxHorario;
  
      const header = document.querySelector('.container-header');
      const calc = proxValor - horasMinutosFormatados;
      const calcFixed = parseFloat(calc.toFixed(2));
  
      header.classList.remove('red', 'yellow', 'green');
  
      if(calcFixed <= 0.15 && calcFixed > 0.10){
          header.classList.add('red');
      } else if(calcFixed <= 0.10 && calcFixed >= 0.03){
          header.classList.add('yellow');
      } else if(calcFixed <= 0.03 && calcFixed >= 0.01){
          header.classList.add('green');
      }
  }
  
  setInterval(horarioAtual, 1000);
  