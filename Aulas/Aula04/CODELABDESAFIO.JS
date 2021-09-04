const { Console } = require('console');

const prompt = require('prompt-sync')();

//DESAFIO 01
//Reajuste salarial

let salario = +prompt("Digite o valor do salário do colaborador: ");

if (salario <= 280) {
    percentual = 20;
} else if (salario <= 700) {
    percentual = 15;
} else if (salario <= 1500) {
    percentual = 10;
} else {
    percentual = 5;
}

console.log(`O salario original é: R$  ${salario}`);
console.log(`O valor do percentual é: ${percentual}%`);

percentual = percentual / 100;
aumento = percentual * salario;
novoSalario = salario + aumento;

console.log(`Aumento foi de: R$ ${aumento.toFixed(2)}`);
console.log(`Novo salário tem o valor de: R$ ${novoSalario.toFixed(2)}`);


//DESAFIO 02
// Jogo da adivinhação

numeroRandomico = Math.floor(Math.random() * 5);
//console.log(numeroRandomico);

usuario = +prompt("Digite um número entre 0 e 5: ");

console.log("PROCESSANDO...");

if (usuario === numeroRandomico) {
    console.log("Você acertou o número, parabéns");
} else if (usuario > 5) {
    console.log("Você escolheu um número maior que 5");
} else if (usuario > numeroRandomico) {
    console.log("Você chutou alto demais");
} else if (usuario < numeroRandomico) {
    console.log("Você chutou baixo demais");
}

// DESAFIO 3
// Caixa eletrônico

let valor = +prompt("Digite um valor para saque de [10-600]: ");

cem = Math.trunc(valor / 100);
// cem = Math.trunc(cem)
valor = valor - (cem * 100);

cinquenta = Math.trunc(valor / 50);
valor = valor - (cinquenta * 50);

dez = Math.trunc(valor / 10);
valor = valor - (dez * 10);

cinco = Math.trunc(valor / 5);
valor = valor - (cinco * 5);

um = valor;

console.log(`Quantidade de Notas de R$100,00 = ${cem}`);
console.log(`Quantidade de Notas de R$ 50,00 = ${cinquenta}`);
console.log(`Quantidade de Notas de R$ 10,00 = ${dez}`);
console.log(`Quantidade de Notas de R$  5,00 = ${cinco}`)
console.log(`Quantidade de Notas de R$  1,00 = ${um}`)
