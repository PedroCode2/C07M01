const prompt = require('prompt-sync')();

class Pessoa {
    constructor(dinheiro){
        this.cafeTomado = false,
        this.dinheiro = dinheiro,
        this.sono = 0
        this.hora = 8
    }

    tomarcafe(){
        console.log("Você tomou um café gostosinho!");
        this.cafeTomado = true;
    }

    exibirdados(){
        console.log(`
        Hoje é o dia 01.
        Hora: ${this.hora}
        Café tomado: ${this.cafeTomado}
        Sono: ${this.sono}
        Dinheiro: ${this.dinheiro}
        `)
    }

    passarhora(tempo){
        this.hora += tempo
    }

    mostrarhora(){
        console.log(`Agora são: ${this.hora} horas.`);
    }
}


var pessoa = new Pessoa(100);
pessoa.exibirdados();

while (true) { 
    console.log(`
    Escolha uma opção:
    1 - Tomar café
    2 - Estudar
    3 - Trabalhar
    4 - Descansar
    5 - Status
    0 - Sair
    `)

    let opcao = +prompt("Digite sua escolha: ")

    if (opcao == 1) {
        pessoa.tomarcafe();
        pessoa.passarhora(1);
        pessoa.mostrarhora()
    } else if (opcao == 2) {
        console.log("Você estudou")
        // Aqui eu colocaria o que quero alterar quando ele estuda.
        pessoa.passarhora(3)
        pessoa.mostrarhora()
    } else if (opcao == 3) {
        pessoa.mostrarhora()
    } else if (opcao == 4) {
        pessoa.mostrarhora()
    } else if (opcao == 5) {
   
        break
    } else if (opcao == 0) {
        break
    } else {
        console.log("Opção inválida!")
    }
} 








var continuar = 0;

class Relogio{
    constructor(){
        this.horas = 16;
        this.minutos = 20;
        this.dia = 1
    }
    mostrarHorario(){

        console.log(`Agora são ${this.horas}:${this.minutos} horas`);
    }
    avancaTempo(minutos){
        this.minutos += minutos
        while(this.minutos >= 60){
            this.minutos -= 60;
            this.horas += 1;
        }
        while(this.horas >= 24){
            this.horas -= 24
            this.dia += 1
        }

    }
}


do {
////CLASSE QUE SERA RESPONSAVEL PELO PESONAGEM

class Personagem {

  constructor(nome, higiene, sair, fase, vidas, hora, minutos, dia, totalVidas) {

    this.nome = nome;
    this.higiene = higiene;
    this.sair = false;
    this.fase = 0
    this.vidas = 5;
    this.horas = 8;
    this.minutos = 0;
    this.dia = 1;
    this.totalVidas = 0;
  }

  alterarNome(){
  return this.nome
  }
  sairMascara(){
        this.sair  = true;
  }
  sairFesta(){
        this.sair  = false;     
  }
  sairMercado (){
    this.sair = false;
  }
  visitarVovozinha (){
    this.sair = false;
  }
  higienizar(){
    this.higiene = true;
  }
  totaldeVidas() {
    this.vidas = true;
    return this.vidas
  }
  
  status(){
      console.log(`
      Hoje é o dia ${this.dia}
      Horas: ${this.horas}
      Vidas: ${this.vidas}
      `)
  }

  avancaTempo(tempo){
    this.hora += tempo
  }

  mostrarhora(){
      console.log(`Agora são ${this.horas}:${this.minutos} horas`);
}
}



personagem = prompt(`****** Informe o nome do jogador ******:`);

var personagem = new Personagem (100);
personagem.status();



higiene();

var totalVidas = 0;
totalVidas = this.vidas;

function higiene(){

for (var vidas = 0; vidas += 5; vidas++){

    console.log(`
    Hora de higienizar as mãos!\n
    Escolha uma opção:
    1 - Lavou com água e sabão
    2 - Só passou ácool em gel 70º
    3 - Só lavou com água
    4 - Não lavou
    0 - Sair
    `)

    let opcao = prompt("Digite sua escolha:");
    
    if (opcao == 1) {
        console.log("Lave as mãos várias vezes ao dia, ganhou 4 vidas.");
        console.log();
        personagem.avancaTempo(1);
        personagem.mostrarhora()
        console.log(`Você tem ${vidas += 4} vidas`);
        return;

    } else if (opcao == 2) {
        console.log("O uso do álcool gel é para sujeiras não visíveis.\nGanhou 3 vidas.");
        personagem.mostrarhora();
        console.log(`Você tem ${vidas += 3} vidas`);
        break

    } else if (opcao == 3) {
            console.log("Só água não mata os vírus. Perdeu 4 vidas")
            personagem.mostrarhora();
            console.log(`Você tem ${vidas -= 4} vidas`);
            break

    } else if (opcao == 4) {
      console.log("Lave antes e depois de ir ao banheiro, quando for manusear alimentos, quando tocar em algo, quando sair e voltar de casa. Procedimentos que devem ser habituais e não só para este momento. Perdeu 5 vidas!");
        personagem.mostrarhora();
        console.log(`Você tem ${vidas -=5 } vidas`);
        break

    } else if (opcao == 0) {
        break
    } else {
        console.log("Opção inválida!")
    }
} 
}



var fase = prompt("Deseja seguir para 2ª fase? S/N: ");

while(fase == "N"){

  console.log(this.vidas())
  console.log(`Vidas já conquistadas `);
  console.log("Fim de jogoto");
  break
  
}

trabalhar();

console.log("O distanciamento e o isolamento social são provisórios e necessários para reduzir a propagação do vírus. Mantenha distância mínima de um metro e meio entre pessoas em lugares públicos e de convívio social, sempre usando máscaras.\n");



function trabalhar(){

let trabalho = prompt("Vai sair de casa? S/N").toUpperCase()
    
if(trabalho == "N"){

      console.log(`Você ganhou ${vidas == 5} vidas`);
} else {
while (trabalho == "S"){

    console.log(`
    Escolha uma opção:
    1 - Tá com máscara?
    2 - Ônibus
    3 - Vai para Festa?
    4 - Vai para o Bar
    5 - Ida ao Mercado?
    6 - Visitar a Vovozinha 
    7 - Status
    0 - Sair
    `)

   let opcao = +prompt("Digite sua escolha: ");


    if (opcao == 1) {
        console.log("Parabés! Como você tá seguindo o protocolo, ganhou 5 vidas.");
        personagem.avancaTempo(1);
        personagem.mostrarhora()
        console.log(`Você tem ${vidas += 5} vidas`);

    } else if (opcao == 2) {
        
        console.log("Você escolheu ir de Ônibus. Foi contaminado e contaminou mais 100 pessoas, perdeu 5 vidas");
        personagem.mostrarhora()
        console.log(`Você tem ${vidas -= 5} vidas`);

    } else if (opcao == 3) {
        console.log("Você foi irresponsável, perdeu 4 vidas");
        personagem.mostrarhora();
        console.log(`Você tem ${vidas -= 4} vidas`);
        

    } else if (opcao == 4) {
        console.log("Você foi irresponsável, perdeu 4 vidas")
        personagem.mostrarhora();
        console.log(`Você tem ${vidas -= 4} vidas`);
      

    } else if (opcao == 5) {
      console.log("Você ainda não aprendeu que nesse momento precisamos manter o isolamento social, online é a melhor opção para compras. Como foi sozinho para o Mercado, só perdeu 2 vidas");
        personagem.mostrarhora();
        console.log(`Você tem ${vidas -= 2} vidas`);

    } else if (opcao == 6) {
        console.log("Você foi irresponsáve!\nÉ muito importante manter o isolamento social.\nAme a Vida!!!\n.Perdeu 5 vidas")
        personagem.mostrarhora();
        console.log(`Você tem ${vidas -= 5} vidas`);
      break
    } else if (opcao == 7) {
        pessoa.status();
    
    } else if (opcao == 0) {
        personagem.status();
        break;

    } else {
        console.log("Opção inválida!")
    }
} 
}



}

continuar = prompt("Fim de jogo. Deseja continuar? (Resp. S / N):").toUpperCase()

}while(continuar === "S")