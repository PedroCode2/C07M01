const { SSL_OP_NO_COMPRESSION } = require('constants');
const { get } = require('prompt');
const prompt = require('prompt-sync')();
// // CRIANDO UMA CLASSE PARA O RELOGIO // //
class Relogio{
    constructor(){
        this.Horas = 16;
        this.Minutos = 20;
        this.dia = 1
    }
    mostrarHorario(){
        
        console.log(`Agora são ${this.Horas}:${this.Minutos} da noite do ${this.dia} Dia`)
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
    passouDohorario(){
        if((this.Horas > 22) || (this.Horas = 22 && this.Minutos > 0)){
            console.log("Você passou do horario de dormir, apague as luzes ou o assassino ira atras de você"); 
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
        console.log("Você escolheu limpar a casa");
        this.cansado = true;
        this.sujo = true;
        this.fome = true;
        console.log()
        console.log("Você demorou 3 horas para limpar a casa");
        horario.avancaTempo(180);
        if (cansado == true){
            console.log("Você esta cansado demais para limpar a casa, va fazer outra coisa.");
        }
    }
    
    tomarBanho(){
       if(this.sujo === true){
            console.log("Você esta tomando banho");
            this.sujo = false;
            let nada = prompt("")
            console.log(nada);
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
            horario.avancaTempo(40)
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
            horario.Horas = 10
            horario.Minutos = 20
            horario.dia++
            console.log()
            horario.mostrarHorario()
            
        }else {
            console.log("Você não estava cansado o suficiente então, dormiu por 4 horas");
            horario.avancaTempo(240);
            horario.mostrarHorario()
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
// Atribuindo as duas classes a uma variavel//
var horario = new Relogio();

var personagem = new Personagem();
console.log(`                   Corra pela sua vida
    Você decide passar as férias acampados em uma cabana na floresta, mas mal sabia o que o esperava.
Existia um Serial killer desconhecido que vivia naquela floresta, esse serial killer ira perturbar
a sua paz, faça as escolhas certas para sobreviver ou morra tentando escapar daquele local.
`)

console.log();

console.log("Após um dia longo de viagem finalmente cheguei na cabana dos meus pais, o que fazer agora ? ");

console.log();
// // Inicio do jogo que sempre recebera true pois não existe um prompt // // 
function inicio (){
        while(true){
        personagem.informacoes()
        console.log(`
        Selecione uma opção:
        1 - Limpar a cabana, arrumar tudo;
        2 - Comer comida
        3 - Tomar banho e escovar os dentes;
        4 - Se preparar e ir dormir
        5 - Sair para dar uma volta na floresta
        0 - Desistir
        `);
        
        let escolha = +prompt("Faça a sua escolha: ");
        
        if(escolha == 1){
            console.clear()
            personagem.limparcasa();
            horario.mostrarHorario();
        }
        else if(escolha == 2){
            personagem.comer()
            horario.mostrarHorario()
        }
        else if(escolha == 3){
            console.clear()
            personagem.tomarBanho()
            horario.mostrarHorario()
        }
        else if (escolha == 4){
            console.clear()
            personagem.dormir();
        }
        else if (escolha == 5){
            console.log("Você saiu para caminhar na floresta é ficou algumas horas fora");
            horario.avancaTempo(240);
            horario.mostrarHorario();
            console.log();
            // aqui eu adiciono medo ao meu personagem por sair para caminhar na floresta sozinho//
            personagem.medo = false
            if(horario.Horas >= 23){
                horario.mostrarHorario()
                console.log();
                console.log("Você saiu pra caminhar muito tarde e escutou barulhos estranhos na floresta");
                personagem.medo = true
            }if (personagem.medo == true){
                console.log()
                console.log("Você ficou com medo e se desesperou, encontrou o assassino que estava na floresta.. ele te matou");
                console.log()
                console.log(`Você morreu as ${horario.mostrarHorario()} do dia ${horario.dia}`)
                break
            }
        }else if (escolha == 0){
            console.log("Você desistiu do jogo")
            break
        }else if(horario.dia === 10){
            console.log("Você sobreviveu por 10 dias, Parabens!! Você ganhou.")
            break
        }
    }
}
inicio();
function repetir(){
    let novamente = prompt("Deseja jogar novamente ?").toUpperCase();
    if(novamente == "Sim"){
        while(novamente){
            inicio();
        }
    }
}
repetir();
// // Fim do programa que roda todo o jogo de escolhas // // 