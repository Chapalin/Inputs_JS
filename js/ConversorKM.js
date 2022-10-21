import entDados from "readline-sync";

console.log("Conversor de Milhas para Quilômetros: \n ");

let mi = entDados.question("Informe o valor de Milhas: "); 
let km = mi / 0.62137; 
let valorFixed = km.toFixed(2)

console.log("KM: " + valorFixed + "Km ");