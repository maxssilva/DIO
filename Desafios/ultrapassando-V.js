// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let R = parseInt(gets());
let V = 0;
let soma = 0;
let contador = 0;


//let V = parseInt(gets())
while (V <= R){
  V = parseInt(gets());
}

while (soma <= V){
  soma = soma+R;
  R++;
  contador++;
}
console.log(contador);