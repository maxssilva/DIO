let SALARIO = gets();
  SALARIO = parseFloat(SALARIO);
  if (SALARIO<=2000){
    console.log('Isento');
  }
  else if(SALARIO<=3000){
    CALC1 = (SALARIO - 2000)*0.08;
    CALC1 = parseFloat(CALC1);
    CALC1 = CALC1.toFixed(2);
    console.log(CALC1);
  }
  
  else if(SALARIO<=4500){
    CALC2 = ((SALARIO - 3000)*0.18)+80;
    CALC2 = parseFloat(CALC2);
    CALC2 = CALC2.toFixed(2);
    console.log(CALC2);
  }
  