let line = gets().split(" ");
let T = parseInt(line[0]);
let V = parseInt(line[1]);
let litrosNecessarios = ((T * V)/12).toFixed(3);
console.log(litrosNecessarios);