const prompt = require('prompt-sync')();

// // // Projeto 03 – Jogo de Dados // // // 

// // // Declarando variaveis antes do jogo // // //
// var nomeNumero = {}


var rodadas = 0;
var listajogadores = []
var vitoria = 0; 
// // // Fim das Declações // // //



var rodadas = +prompt("Quantas rodadas deseja jogar? ");
let qtdjogador = prompt("Quantas pessoas irão jogar? ");




for(let i = 0; i < qtdjogador; i++){
    let jogador = {nome:"", numerotirado: [] }
    jogador.nome = prompt("Digite o nome dos jogadores: ")
    listajogadores.push(jogador)
}

    

for(let a = 0; a < rodadas; a++){
    for(let j = 0; j < qtdjogador; j++){
     
       listajogadores[j].numerotirado.push(Math.floor(Math.random() * (6 - 1 + 1) + 1))
    //    listajogadores[j].numerotirado.sort(function (x, y) {
    //     if (x.numerotirado > y.numerotirado) {
    //         return -1;
    //     }
    //     if (x.numerotirado < y.numerotirado) {
    //         return 1;
    //     }
    //     return 0;
        
    // }); console.log()
    }
    }



    for (let c = 0; c < listajogadores.length; c++){
    console.log(`${c+1}° $Jogador: `)
    for (let prop in listajogadores[c]){
        console.log(`${prop}: ${listajogadores[c][prop]}`)
    }
} // ignora que e pra mostrar bonitinho



