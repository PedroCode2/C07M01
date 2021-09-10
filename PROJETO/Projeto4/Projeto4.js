const { auto } = require('async');

const prompt = require('prompt-sync')();

console.log("A Eleição está começando.")
 var candidato1 = 0;
 var candidato2= 0;
 var candidato3 = 0; 
 var votoNulo = 0;
 var votoEmbranco = 0;
 var voto;
 var idade;
 var anoNascimento;

function autorizaVoto(anoNascimento){
    anoNascimento = +prompt("Em que Ano você nasceu? "); 
    var anoatual = new Date().getFullYear();
    idade = anoatual - anoNascimento;
    var autorizacao; 
if(idade < 16){
    autorizacao = 'Voto Negado';
    return autorizacao;
}else if((idade < 18) || (idade > 65)){
    autorizacao = 'Voto Opcional';
    return autorizacao;
}else {
    autorizacao = 'Voto Obrigatório';
    return autorizacao;
}
}

function votacao(autorizacao, voto){
    
    var votar = prompt("______Vai começar a votar?_____ ").toUpperCase();
    
    if (votar === "NAO"){
        console.log("Ok, até a hora em que for votar!!");
    } else if(autorizacao === 'Voto Negado'){
        console.log(`Com ${idade} anos você não pode votar!`);
      
    }   else if(autorizacao === "Voto Opcional"){
    console.log(`Com ${idade} anos o voto é opcional`);
    console.log()
        var votar = prompt("Seu voto é opcional, você deseja votar !? ");
        while(votar != "NAO"){
    console.log(`
    1 = Candidato 1
    ---------------
    2 = Candidato 2
    ---------------
    3 = Candidato 3
    ---------------
    4 = Voto nulo
    ---------------
    5 = Voto em branco
    ------------------
    `);
    console.log();
        let voto = +prompt("Em quem você vai seu voto? ");
    
        if(voto === 1 ){
        candidato1 ++;
        }   else if(voto === 2){
        candidato2++;
        }   else if(voto === 3){
        candidato3 ++;
        }   else if(voto === 4){
        votoNulo ++;
        }   else if(voto === 5){
        votoEmbranco ++;
        }   else {
        console.log("Voto invalido.");
        }
        console.clear();
        var votar = prompt("Deseja continuar votando? ").toUpperCase();
        }
    }else if(autorizacao === 'Voto Obrigatório') {
        console.log(`Com ${idade} anos o voto é Obrigatório`);
        console.log();
        while(votar != "NAO"){
    
            console.log(`
            1 = Candidato 1
            ---------------
            2 = Candidato 2
            ---------------
            3 = Candidato 3
            ---------------
            4 = Voto nulo
            ---------------
            5 = Voto em branco
            ------------------
            `);
              
            let voto = +prompt("Em quem você vai seu voto? ");
        
            if(voto === 1 ){
            candidato1 ++;
            }   else if(voto === 2){
            candidato2++;
            }   else if(voto === 3){
            candidato3 ++;
            }   else if(voto === 4){
            votoNulo ++;
            }   else if(voto === 5){
            votoEmbranco ++;
            }   else {
            console.log("Voto invalido.");
            }
            console.clear();
            var votar = prompt("Deseja continuar votando? ").toUpperCase();
        }
    }
    
}
console.clear();

function exibirResultados(){
    console.log(`O Candidato1 recebeu ${candidato1} votos.`);
    console.log(`O Candidato2 recebeu ${candidato2} votos.`);
    console.log(`O Candidato3 recebeu ${candidato3} votos.`);
    console.log(`${votoNulo} foram votos nulos.`);
    console.log(`${votoEmbranco} foram votos em branco.`);
    if (candidato1>candidato2&&candidato1>candidato3){
        console.log("O vencedor da eleição foi o Candidato1");
    } else if (candidato2>candidato1&&candidato2>candidato3){
        console.log("O vencedor da eleição foi o Candidato2");
    } else if (candidato3>candidato1&&candidato3>candidato2){
        console.log("O vencedor da eleição foi o Candidato3");
    } else {
        console.log("Não houve vencedor!");
    }
}

var autorizacao = autorizaVoto(anoNascimento);

votacao(autorizacao, voto);

exibirResultados();