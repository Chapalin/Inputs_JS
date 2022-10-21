import inputDados from 'readline-sync'

let base = inputDados.question("Informe a Base: ");
let altura = inputDados.question("Informe a Altura: ");

let area = (base *  altura) / 2

console.log("A área do triângulo é: " + area)