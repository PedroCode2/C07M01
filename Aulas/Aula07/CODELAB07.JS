// Exercício 1 - Calcular a soma de todos os dígitos de um número inteiro positivo.
function somarDigitos(digito) {
    const digitoString = digito.toString();

    let soma = 0;

    for (const char of digitoString) {
        const digito = +char;
        soma += digito;
    }

    return soma;
}

const resultado = somarDigitos(1235231);
console.log(`Soma de todos os dígitos: ${resultado}.`);

// Exercício 2 - Criar uma função que junte dois arrays e retorne o resultado como um novo array.
// Exemplo 1:
function juntarArrays(...arrays) {
    const arrayFinal = [];

    for (const array of arrays) {
        arrayFinal.push(...array);
    }

    return arrayFinal;
}

const arrayNumeros1 = [1, 2, 3];
const arrayNumeros2 = [4, 5, 6];
const arrayNumeros3 = [7, 8, 9];

const arrayJunto = juntarArrays(arrayNumeros1, arrayNumeros2, arrayNumeros3);

console.log(arrayJunto);

// Exemplo 2

function juntarArrays(array1, array2) {
    return [...array1, ...array2];
}

const arrayNumeros1 = [1, 2, 3];
const arrayNumeros2 = [4, 5, 6];

const arrayJunto = juntarArrays(arrayNumeros1, arrayNumeros2);

console.log(arrayJunto);

// Exemplo 3

function juntarArrays(array1, array2) {
    const array = [];

    for (let elemento of array1) {
        array.push(elemento);
    }

    for (let elemento of array2) {
        array.push(elemento);
    }

    return array;
}

const arrayNumeros1 = [1, 2, 3];
const arrayNumeros2 = [4, 5, 6];

const arrayJunto = juntarArrays(arrayNumeros1, arrayNumeros2);

console.log(arrayJunto);

// Exercício 3 -  Contar a quantidade de palavras em um texto
function contarPalavras(text) {
    let existeSeparador = true;
    let palavras = 0;

    for (const c of text) {
        if (separador(c)) {
            existeSeparador = true;

            continue;
        }

        if (existeSeparador) {
            palavras++;

            existeSeparador = false;
        }
    }

    return palavras;
}

function separador(c) {
    const separadores = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];

    return separadores.includes(c);
}

console.log(contarPalavras(""));
console.log(contarPalavras(" "));
console.log(contarPalavras("SQL Server!! "));
console.log(contarPalavras(" React Native PHP ASP"));
console.log(contarPalavras(" O PHP existe há mais de 26 anos "));
console.log(contarPalavras("Vamos estudar bancos de dados relacionais"));
