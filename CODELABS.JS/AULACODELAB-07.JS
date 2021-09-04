////Exercicio 1
let num = +prompt("Digite um número: ");
let numConv = num.toString();
let soma = 0;
for (let str of numeroConvertido){
 soma = soma+parseInt(str,10);
}
console.log(`A soma dos números é ${soma}`);



////Exercicio 2

function arrays (){
    let lista1 = ["Adriana, Edilson, Maria Eduarda"];
    let lista2 = ["Maria Aparecida, Pedro, Yasmin"];
    console.log(lista1, lista2);
    return lista3 = lista1.concat(lista2);
    console.log(lista3);
}
arrays()


////Exercicio 3

function Wordcount(){
    let texto = prompt("Digite um texto aqui: ");
    return texto.split(" ").length;
}

Wordcount()

