const prompt = require('prompt-sync')()
console.log("Bem vindo ao Jokênpo. ");


function totalrodadas(){
  var rodadas = +prompt("Quantas rodadas você quer jogar ?");
  return rodadas;
}

var vitoria = 0;
var derrota = 0;
var empate = 0;


function quantidadeJogos(){
let escolha = prompt('Digite 1 para pedra, 2 para papel e 3 para tesoura:');
let computador = Math.ceil(Math.random()*3);
console.log(`A escolha do computador é ${computador}`);

if(escolha == computador){
    console.log("Empate!");
    empate++;
}else if ((escolha - computador == -2) || (escolha - computador == 1)){
    console.log("Você Ganhou");
    vitoria++;
}else{
  console.log("O Computador ganhou");
  derrota++;
}
}

function placar(){
console.log(`A quantidade de vitorias é : ${vitoria}`);
console.log(`A quantidade de derrotas é : ${derrota}`);
console.log(`A quantidade de empates é : ${empate}`);

if(vitoria > derrota){
  console.log("Você é o grande vencedor");
}else if (vitoria < derrota){
  console.log("O computador é o grande vencedor");
}else if(vitoria === derrota){
  console.log("Você empatou com o computador.");
}
}

function start() {
  qnt = totalrodadas()
  for (let i = 0; i < qnt; i++){
  console.log(quantidadeJogos());
  }
console.log(placar());
}

start();

let sair = prompt("Deseja continuar ? ");
console.log();
if (sair == "Sim", "sim", "SIM"){
console.log("Bem vindo ao Jokênpo. ");
start();
}else {
  console.log("Até Logo.");
}