const { Console } = require("console");

const prompt = require("prompt-sync")();


var carro = {
    marca: prompt("Digite a marca do carro? "),
    modelo: prompt("Digite o modelo do carro? "),
    ano: prompt("Digite o ano do carro? "),
    proprietario: prompt("Digite o nome do proprietario: "),
    acelerar: function(){
        console.log("VRUM VRUUUUUM")
    },
    vender: function(){
        vendercarro = prompt(`Você deseja vender o ${this.modelo}?? `)
        if(vendercarro.toUpperCase() == "SIM"){
            let novoprop = prompt("Digite o nome do novo proprietario: ")
            this.proprietario = novoprop
            console.log(`O carro foi vendido para ${this.proprietario}`)
        }else{
            console.log("Ok, você continua sendo o dono")
        }
    }
}


console.log(carro);
carro.vender()
console.log(carro);