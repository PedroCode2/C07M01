const prompt = require('prompt-sync')({sigint: true});

//EXERCÍCIO 1 - Faça um programa que leia nome e média de um aluno, guardando também a situação em um objeto.
// No final, mostre o conteúdo da estrutura na tela.
//A média para aprovação é 7. Se o aluno tirar entre 5 e 6.9 está de recuperação, caso contrário é reprovado.

const aluno = {}

aluno.nome = prompt("Nome: ")
aluno.media = prompt("Media: ")

if (aluno.media >= 7) {
    aluno.situacao = 'Aprovado'
} else if (aluno.media >= 5 || aluno.media > 7){
    aluno.situacao = 'Recuperação'
} else {
    aluno.situacao = 'Reprovado'
}

console.log(aluno)


//EXERCÍCIO 2 - Crie um programa que leia o preço e a quantidade de um produto a ser comprado, calculando o total da compra, guarde 
//essas informações em um objeto. Se o valor total da compra for maior que R$ 100,00 de o desconto de 10%, se for entre R$ 400,00 e
//R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê 20% de desconto. No final mostre ao cliente a quantidade, o preço do 
//produto e o valor total de sua compra, considerando o desconto dado. Não se esqueça de alterar o valor total no objeto.  


const produto = {};

produto.quantidade = parseInt(prompt("Quantidade: "));
produto.preco = parseFloat(prompt("Preço: R$  "));
produto.total = produto.quantidade * produto.preco;
let desconto = 0

if (produto.total >= 100) {
    desconto = produto.total * 0.10
    produto.total -= desconto;
} else if (produto.total >= 400 || produto.total <= 500){
    desconto = produto.total * 0.15
    produto.total -= desconto;
} else if (produto.total > 500){
    desconto = produto.total * 0.20
    produto.total -= desconto;
};

console.log(produto);


//: Crie um programa que leia nome, ano de nascimento e carteira de trabalho e cadastre-os (com idade) em um objeto.
//Se por acaso a CTPS for diferente de 0, o objeto receberá também o ano de contratação e o salário.
//Calcule e acrescente , além da idade , com quantos anos a pessoa vai se aposentar. Considere que o trabalhador 
//deve contribuir por 35 anos para se aposentar. 

const dados = {};
dados.nome = prompt('Nome: ');
const nasc = prompt('Ano de nascimento: ');
const anoAtual = new Date().getFullYear();
dados.idade = anoAtual - nasc;
dados.ctps = parseInt(prompt('Num. CTPS: '));
if (dados.ctps != 0){
    dados.contratacao = parseInt(prompt('Ano da contratação: '));
    dados.salario = parseInt(prompt('Salário: R$ '));
    dados.aposentadoria = dados.contratacao + 35 - anoAtual + dados.idade ;
};

console.log(dados);
