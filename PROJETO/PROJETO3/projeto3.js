const { Console } = require('console');

const prompt = require('prompt-sync')();

// // // Projeto 03 – Jogo de Dados // // // 

// // // Declarando variaveis antes do jogo // // //

    //Começo do meu projeto//
    
var rodadas = 0;
var listajogadores = [];
var jogador = "";
var numerotirado = 0; 
var ganhadora = []
var nome = ""
// // // Fim das Declações // // //

    // Começo do jogo //
console.log("Seja bem vindos ao jogo de dados")

var rodadas = +prompt("Quantas rodadas deseja jogar? ");

let qtdjogador = prompt("Quantas pessoas irão jogar? ");
// perguntar o nome do jogador e passar como objeto para a lista//

for(let b = 0; b < qtdjogador; b++){
    let jogador = {nome: "", numero: 0, vitoria: 0}
    jogador.nome = prompt("Digite o nome dos jogadores: ");
    listajogadores.push(jogador);
}
 // Definir o numero aleatorio e organizar a lista em ordem decrescente //

 for(let i = 0; i < rodadas; i++){
    console.log()
    console.log(`${i+1}ºRodada: `)
    for(let c = 0; c < qtdjogador; c++){
       listajogadores[c].numero = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    } 
    
        //Para mostrar de uma forma bonita o jogo acontecendo //
for (let c = 0; c < listajogadores.length; c++){
    console.log()
     console.log(`${c+1}ºLugar: `)
    for (let prop in listajogadores[c]){
     console.log(`${prop}: ${listajogadores[c][prop]}`)
}
}
         // Definir quem foi o vencedor das rodadas // 
if(listajogadores[0].numero === listajogadores[1].numero){
    console.log(`O jogador ${listajogadores[0].nome} empatou com ${listajogadores[1].nome} na ${i+1}ºrodada`)
    nome = "$@#!@#"
}else{
    console.log(`O jogador ${listajogadores[0].nome} venceu a  ${i+1}ºrodada`)
    nome = listajogadores[0].nome
}
    // Contador para adicionar vitoria vencedor da rodada //
for(let j = 0; j < qtdjogador; j++){
if(nome === listajogadores[j].nome){
    listajogadores[j].vitoria++;
}
}
}
console.log()
    // organizar quem teve a maior quantidade de vitorias e mostrar qual foi o jogador//
listajogadores.sort(function(x,y){
    return y.vitoria - x.vitoria
        });
if(listajogadores[0].vitoria === listajogadores[1].vitoria){
console.log(`O jogador ${listajogadores[0].nome} empatou com ${listajogadores[1].nome} com ${listajogadores[0].vitoria} vitorias`)
}else{
console.log(`O jogador ${listajogadores[0].nome} venceu a partida com ${listajogadores[0].vitoria} vitorias`);
}

    // Fim do jogo//
    // Final do meu projeto//