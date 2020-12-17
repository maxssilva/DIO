// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let N = 0; //nota digitada pelo usuário
let calcMedia= 0;
let contador = 0;
let nota = [];
let media = 0;
while (contador <= 2){
  
  N = parseFloat(gets());
    if (N < 0 || N >10){
      console.log("nota invalida");
  }
    else{
      nota.push(N);
      contador = contador + 1;
    }
}

calcMedia = parseFloat((nota[0] + nota[1])/2)
media = calcMedia.toFixed(2);

console.log("media = ", media);