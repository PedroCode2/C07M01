const prompt = require('prompt-sync')();
// EXERCÍCIO 01 - Considere a string A = "Os limites só existem se você os deixar existir.(goku)". Que fatia corresponde a (goku)?

const frase = "Os limites só existem se você os deixar existir.(goku)";
console.log(frase.substring(48));


// EXERCÍCIO 02 - Escreva um programa que solicite uma frase ao usuário e escreva a frase toda em maiúscula e sem espaços em branco.

const frase = "hello world";
// Maiúsculo
console.log(frase.toUpperCase().replace(/\s+/g, ""));

// EXERCÍCIO 03 - Elabore um programa que recebe o seu nome, endereço e hobby e mostra cada uma das informações da seguinte forma:
// Nome -> Letra maiúscula
// Endereço -> Letra minúscula
// Hobby -> Primeira letra maiúscula
// Exemplo Entrada:
// Nome: bruno fabri
// Endereço: Rua ABC
// Hobby: jogar cs
// Exemplo Saída:
// Nome: BRUNO FABRI
// Endereço: rua abc
// Hobby: Jogar cs
const nome = prompt("Digite seu nome: ");
const endereco = prompt("Digite seu endereço: ");
const hobby = prompt("Digite seu Hobby: ");

console.log(nome.toUpperCase());
console.log(endereco.toLowerCase());
console.log(hobby.substring(0, 1).toUpperCase().concat(hobby.substring(1)));


// EXERCÍCIO 04 - Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
// Crie uma variável para receber o valor, com conversão para int
// Para um número ser par, a divisão dele por 2 tem que dar resto 0
const numero = +prompt("Digite o numero: ");

if (numero % 2 === 0) {
    console.log("Numero par");
} else {
    console.log("Numero impar");
}

// EXERCÍCIO 05 - Parte 1
// Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo.
let valor = prompt("Digite o valor: ");
if (valor > 0) {
    console.log("Valor positivo");
} else {
    console.log("Valor negativo");
}
// Parte 2
// Agora implemente a funcionalidade de não aceitar o número 0, no input.
let valor = prompt("Digite o valor: ");
if (valor === 0) {
    console.log("Numero inválido");
} else if (valor > 0) {
    console.log("Valor positivo");
} else {
    console.log("Valor negativo");
}
// EXERCÍCIO 06 - Faça um programa que peça dois números, imprima o maior deles ou imprima "Numeros iguais" se os números forem iguais.
let numero1 = +prompt("Digite o primeiro numero: ");
let numero2 = +prompt("Digite o segundo numero: ");

if (numero1 > numero2) {
    console.log(`O numero ${num1} é o maior`);
} else if (numero1 === numero2) {
    console.log(`Os numeros são iguais!`);
} else {
    console.log(`O numero ${numero2} é o maior`);
}

// EXERCÍCIO 07 - Crie um programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, caso escreva outra letra: Sexo Inválido.

const resposta = prompt("Digite M ou F: ");

if (resposta === "M" || resposta === "m") {
    console.log("Masculino");
} else if (resposta === "F" || resposta === "f") {
    console.log("Feminino");
} else {
    console.log("Você não digitou as letras correta!");
}

// EXERCÍCIO 08 - Crie um programa em JavaScript que peça a nota do aluno, que deve ser um number entre 0.00 e 10.0
// •	Se a nota for menor que 6.0, deve exibir a nota F.
// •	Se a nota for de 6.0 até 7.0, deve exibir a nota D.
// •	Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
// •	Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
// Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.

const nota = +prompt("Qual a nota [0.0 - 10.00]: ");

if (nota >= 0 && nota <= 10) {
    if (nota < 6) {
        console.log(`Sua nota é ${nota} e seu conceito foi F`);
    } else if (nota < 7) {
        console.log(`Sua nota é ${nota} e seu conceito foi D`);
    } else if (nota < 8) {
        console.log(`Sua nota é ${nota} e seu conceito foi C`);
    } else if (nota < 9) {
        console.log(`Sua nota é ${nota} e seu conceito foi B`);
    } else {
        console.log(`Sua nota é ${nota} e seu conceito foi A`);
    }
} else {
    console.log("Nota inválida!");
}

console.log("Pronto");
