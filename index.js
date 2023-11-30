function saldoDeVitorias(vitorias, derrotas){
    return vitorias - derrotas
  }
  
  let resultado = saldoDeVitorias(150, 8)
  
  function partidasRankedas(){
    if (resultado < 10){
      return ("Ferro")
    }else if (resultado >= 11 && resultado <= 20){
        return ("Bronze")
    }else if (resultado >= 21 && resultado <= 50){
        return ("Prata")
    }else if (resultado >= 51 && resultado <= 80){
        return ("Ouro")
    }else if (resultado >= 81 && resultado <= 90){
        return ("Diamante")
    }else if (resultado >= 91 && resultado <= 100){
        return ("Lendário")
    }else{
        return ("Imortal")
    }
  }  
  
  let nivel = partidasRankedas(resultado)
  console.log("O herói tem saldo de " + resultado + " está no nível de " + nivel + ".")