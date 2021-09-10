/*Para TESTAR alguns codigos para colocar no meu projeto, não entrem apenas alguns rascunhos do meu codigo
para não poluir o codigo principal
*/




while(votar !== "não"){
    
    var voto = +prompt("Digite 1 para votar no candidato 1, 2 para o candidato 2 e 3 para o candidato 3, Digite 4 para votar nulo e digite 5 para votar em branco: ")

    if(voto === 1 ){
    candidato1 = candidato1 + 1;
    }   else if(voto === 2){
    candidato2 = candidato2+ 1;
    }   else if(voto === 3){
    candidato3 = candidato3 + 1;
    }   else if(voto === 4){
    votoNulo = votoNulo + 1;
    }   else if(voto === 5){
    votoEmbranco = votoEmbranco + 1;
    }   else {
    console.log("Voto invalido.");
    }
    var votar = prompt("Deseja continuar votando? ").toUpperCase();
}



const { auto } = require('async');

const prompt = require('prompt-sync')();
var candidato1 = 0;
var candidato2= 0;
var candidato3 = 0;
var votoNulo = 0;
var votoEmbranco = 0;
var idade = 0

while(votar == "SIM"){
    let voto = +prompt("Digite 1 para votar no candidato 1, 2 para o candidato 2 e 3 para o candidato 3, Digite 4 para votar nulo e digite 5 para votar em branco: ")
    
    if(voto === 1 ){
        candidato1 = candidato1 + 1;
    }else if(voto === 2){
        candidato2 = candidato2+ 1;
    }else if(voto === 3){
        candidato3 = candidato3 + 1;
    }else if(voto === 4){
        votoNulo = votoNulo + 1;
    }else if(voto === 5){
        votoEmbranco = votoEmbranco + 1;
    }else {
        console.log("Voto invalido.");
    }
    
    var votar = prompt("Deseja continuar votando? ").toUpperCase();
}

function autorizaVoto(anoNascimento){
    let anoNascimento = +prompt("Em que Ano você nasceu? ");
    let anoatual = new Date().getFullYear();
    idade = anoatual - anoNascimento
if(idade < 16){
    return `Com ${idade} Não é possivel Votar.`;
}else if((idade < 18) || (idade > 65)){
    return `Com ${idade} o Voto é Opcional`;
}else {
    return `Com ${idade} o Voto é Obrigatorio`;
}
}

// console.log(autorizaVoto(2001));

function votação(autorização, voto){

}



function teste(votar){
    if(autorizaVoto(anoNascimento))
    var votar = prompt("Vai começar a votar? ").toUpperCase()
    
    while(votar == "SIM"){
        let voto = +prompt("Digite 1 para votar no candidato 1, 2 para o candidato 2 e 3 para o candidato 3, Digite 4 para votar nulo e digite 5 para votar em branco: ")
        
        if(voto === 1 ){
            candidato1 = candidato1 + 1;
        }else if(voto === 2){
            candidato2 = candidato2+ 1;
        }else if(voto === 3){
            candidato3 = candidato3 + 1;
        }else if(voto === 4){
            votoNulo = votoNulo + 1;
        }else if(voto === 5){
            votoEmbranco = votoEmbranco + 1;
        }else {
            console.log("Voto invalido.");
        }
        
        var votar = prompt("Deseja continuar votando? ").toUpperCase();
    }

}

teste()



console.log(`a quantidade de votos do candidato 1 é ${candidato1}`);
console.log(`a quantidade de votos do candidato 1 é ${candidato2}`);
console.log(`a quantidade de votos do candidato 1 é ${candidato3}`);
console.log(`a quantidade de votos do candidato 1 é ${votoNulo}`);
console.log(`a quantidade de votos do candidato 1 é ${votoEmbranco}`);


function exibirResultados(){
    console.log(`O Candidato1 recebeu ${candidato1} votos.`);
    console.log(`O Candidato2 recebeu ${candidato2} votos.`);
    console.log(`O Candidato3 recebeu ${candidato3} votos.`);
    console.log(`${votosNulos} foram votos nulos.`);
    console.log(`${votosBrancos} foram votos em branco.`);
    if (candidato1>candidato2&&candidato1>candidato3){
        console.log("O vencedor foi o Candidato1");
    } else if (candidato2>candidato1&&candidato2>candidato3){
        console.log("O vencedor foi o Candidato2");
    } else if (candidato3>candidato1&&candidato3>candidato2){
        console.log("O vencedor foi o Candidato3");
    } else {
        console.log("Não houve vencedor!");
    }
}