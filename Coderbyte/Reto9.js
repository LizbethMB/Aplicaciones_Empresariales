
function TimeConvert(num) { 
    hora = Math.floor(num / 60);
    minutos= num % 60;
    return hora + ':' + minutos;        
  }
  console.log(TimeConvert(124));     