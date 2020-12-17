for(i=0; i<3; i++){
  
    let L = gets();
    let Vi= gets().split(' ');
    let Tem = 0;
    let i = 0;
    let nivel = 0;
    Tem = Vi.reduce((a, b) => (Math.max(a,b)))
    
    if(Tem<10){
      nivel = 1;
    }
    else if(Tem<20){
      nivel = 2;
    }
    else{
      nivel = 3;
    }
    console.log(nivel)
    }