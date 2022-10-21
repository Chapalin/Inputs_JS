import intDados from 'readline-sync';

console.log("Conversor de Celsius para Kelvin ");


let c = intDados.question("Informe o valor de Celsius Portiolli: ");
let f = (c * 1.8) + 32;

console.log(c + "ºc é equivalente á " + f + "ºF");
