const { SSL_OP_NO_COMPRESSION } = require('constants');
const { get } = require('prompt');
const prompt = require('prompt-sync')();
// // CRIANDO UMA CLASSE PARA O RELOGIO // //
function sleep(n) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}
class Relogio{
    constructor(){
        this.Horas = 16;
        this.Minutos = 20;
        this.dia = 1
    }
    mostrarHorario(){
        
        console.log(`Agora são ${this.Horas}:${this.Minutos} do ${this.dia} Dia`)
    }
    avancaTempo(Minutos){
        this.Minutos += Minutos
        while(this.Minutos >= 60){
            this.Minutos -= 60;
            this.Horas += 1;
        }
        while(this.Horas >= 24){
            this.Horas -= 24
            this.dia += 1
        }    

    }
}
// // Criando a Classe para o personagem // // 
class Personagem {
    constructor(){
        this.cansado = false;
        this.sujo = false;
        this.fome = false;
    
    }
    limparcasa(){
        console.log("Você escolheu limpar a cabana");
        this.cansado = true;
        this.sujo = true;
        this.fome = true;
        console.log();
        console.log("Você demorou 3 horas para limpar a cabana");
        horario.avancaTempo(180);
        if (this.cansado == true){
            console.log("Você esta cansado demais para limpar a cabana, va fazer outra coisa.");
        }
    }
    
    tomarBanho(){
       if(this.sujo === true){
            console.log("Você esta tomando banho");
            this.sujo = false;
            sleep(1500);
            console.log("Você ficou 30 minutos tomando banho e esta de banho tomado!");
            horario.avancaTempo(30);
        }else{
            console.log("Você não pode tomar banho pois ja esta limpo.")
        }
    }
    comer(){
        if(this.fome === true){
            console.log("Você preparou algo gostoso e comeu tudo!");
            this.fome = false;
            horario.avancaTempo(40);
        }else{
            console.log("Você esta Cheio, Não pode comer mais!!");
        }
    }
    dormir(){
        console.log(`Você foi dormir as ${horario.Horas}:${horario.Minutos}`);
        if(this.cansado === true){
            this.cansado = false;
            this.fome = true;
            this.sujo = true;
            horario.Horas = 10;
            horario.Minutos = 20;
            console.log();
            horario.mostrarHorario();
            
        }else {
            console.log("Você não estava cansado o suficiente então, dormiu por 4 horas");
            horario.avancaTempo(240);
            horario.mostrarHorario();
        }
}
    informacoes(){
        console.log(`
        Hoje é o Dia ${horario.dia}
        Horario: ${horario.Horas}:${horario.Minutos}
        Cansado: ${this.cansado}
        Fome: ${this.fome}
        Sujo: ${this.sujo}
        `);

    }
}
class Assassino extends Personagem{
    constructor(){
        super(personagem.cansado);
        this.arma = false;
    }

 
    cansar(){
        if(personagem.cansado == false){
            this.cansado = true;
            console.log("O Assassino ficou cansado e parou de te perseguir.");
    }
     }
    lutar(){
        if(personagem.medo == true){
            this.arma = true;
            console.log("O Assassino puxou um facão enquanto Vocês lutavam");
        }
    } 
    seArmar(){
     if(personagem.medo == true){
         this.arma = true;
         console.log("O Assassino puxou um Facão que estava guardado na sua cintura")
     }
    }
 
}
// Atribuindo as duas classes a uma variavel//
var horario = new Relogio();

var personagem = new Personagem();

var assassino = new Assassino
console.log(`                   Corra pela sua vida
    Você decide passar as férias acampados em uma cabana na floresta, mas mal sabia o que o esperava.
Existia um Serial killer desconhecido que vivia naquela floresta, esse serial killer ira perturbar
a sua paz, faça as escolhas certas para sobreviver ou morra tentando escapar daquele local.
`);

console.log();

console.log("Após um dia longo de viagem finalmente cheguei na cabana dos meus pais, o que fazer agora ? ");

console.log();
// // Inicio do jogo que sempre recebera true pois não existe um prompt // // 
while(true){
    personagem.informacoes();
    console.log(`
    Selecione uma opção:
    1 - Limpar a cabana, arrumar tudo;
    2 - Comer comida
    3 - Tomar banho e escovar os dentes;
    4 - Assistir TV
    5 - Se preparar e ir dormir
    6 - Sair para dar uma volta na floresta
    0 - Desistir
    `);
    
    let escolha = +prompt("Faça a sua escolha: ");
    
    if(escolha == 1){
        console.clear();
        personagem.limparcasa();
        horario.mostrarHorario();
    }
    else if(escolha == 2){
        console.clear();
        personagem.comer();
        horario.mostrarHorario();
    }
    else if(escolha == 3){
        console.clear()
        personagem.tomarBanho();
        horario.mostrarHorario();
    }
    else if(escolha == 4){
        console.clear();
        horario.avancaTempo(60);
        if((horario.Horas <= 23) || (horario.Horas >= 06)){
            console.log("Você liga a TV para assistir, e se depara com a noticia de que existe um Assassino a solta na sua região \nvocê fica assustado com a noticia e tranca a casa toda no primeiro dia.");
            personagem.medo = true;
            horario.avancaTempo(60);
        }else if((horario.Horas >= 23) || (horario.Horas < 06)){
            console.log("Você passou do horario de dormir, apague as luzes ou o assassino ira atras de você");
            personagem.medo = true;
        }
    }
    else if (escolha == 5){
        console.clear();
        personagem.dormir();
        personagem.medo = false
    }
    else if (escolha == 6){
        if(personagem.medo == true){
        console.log("Você pensa em sair para andar pela floresta mas lembra do Assassino que tem a Solta na sua região.")
        }else{   
            console.clear()
            console.log("Você saiu para caminhar na floresta e ficou algumas horas fora");
            horario.avancaTempo(240);
            console.log();
            personagem.fome = true;
            personagem.cansado = true;
            if((horario.Horas >= 23) || (horario.Horas <= 06)){
                horario.mostrarHorario()
                console.log();
                console.log("Você saiu pra caminhar muito tarde e escutou barulhos estranhos na floresta");
                personagem.medo = true;
            }if (personagem.medo == true){
                console.log();
                console.log("Você encontrou o Assassino na floresta e ele começou a te perseguir");
                sleep(500)
                console.log(`
                selecione uma opção
                1 Correr
                2 Tentar enfrentrar o Assassino`);
                let seleciona = +prompt("Qual a sua escolha? ");
                if(seleciona == 1 && personagem.cansado == true){
                    console.log("Voce tentou correr do Assassino mas estava cansado");
                    assassino.seArmar();
                    sleep(500);
                    console.log("Você olhou para tras e viu o assassino com um facão, isso te desconcentrou e você caiu")
                    sleep(500);
                    console.log("O Assassino te alcançou e te matou.");
                    sleep(500);
                    console.log(`Você morreu as ${horario.Horas}:${horario.Minutos} do dia ${horario.dia}`);
                    console.log();
                    break
                }else if(seleciona == 1 && personagem.cansado == false){
                    console.log("Você tentou correr do Assassino");
                    console.log();
                    sleep(500);
                    assassino.cansar()
                    sleep(500);
                    console.log("Você fugiu com sucesso do Assassino e trancou toda a Cabana.");
                    personagem.cansado = true;
                    personagem.fome = true;
                    horario.avancaTempo(120);
                }else if(seleciona == 2 && personagem.cansado == true){
                    console.log("Você tentou lutar contra o Assassino.");
                    console.log();
                    sleep(500);
                    assassino.lutar();
                    sleep(500);
                    console.log("Você perdeu a luta para o Assassino e ele te matou.");
                    sleep(500);
                    console.log(`Você morreu as ${horario.Horas}:${horario.Minutos} do dia ${horario.dia}`);
                    console.log();
                    break
                }else if(seleciona == 2 && personagem.cansado == false){
                    console.log("Você tentou lutar contra o Assassino");
                    console.log();
                    sleep(500);
                    console.log("Você estava bem e conseguiu derrubar o assassino, Você conseguiu fugir e trancou toda a cabana.");
                    personagem.cansado = true;
            }
            
        }
    }
    }else if (escolha == 0){
        console.log("Você desistiu do jogo");
        break
    }
}
// // Fim do programa 