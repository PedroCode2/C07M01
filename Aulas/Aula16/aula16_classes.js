const prompt = require('prompt-sync')()

/* Quando defino classes, uso a primeira letra maiscula
para objetos eu uso a minuscula
*/

// class MeuCarro{
//     constructor(marca, modelo, ano, proprietario){
//     this.marca = marca,
//     this.modelo = modelo,
//     this.ano = ano,
//     this.proprietario = proprietario  
//     }
//     acelerar() {
//         console.log(`${this.modelo} faz VRUM VRUUUUM`)
//     }
// }
 
// let carro1 = new MeuCarro("bmw", "X6", 2021, "Pedro");
// let carro2 = new MeuCarro("Fiat", "Uno", 99, "Duda");

// carro1.acelerar();
// carro2.acelerar();


// function somar(n1, n2){
//     let soma = n1 + n2;
//     console.log(soma);
// }

// somar(76, 78)




class Pessoa{
    constructor(nome, peso, idade){
        this.nome = nome,
        this.peso = peso,
        this.idade = idade
    }
    envelhecer(){
        this.idade = this.idade +1
    }
    emagrecer(){
        this.peso = this.peso -1
    }
    engordar(){
        this.peso = this.peso +1
    }
    dados(){
        console.log(`O(A) ${this.nome} esta pesando ${this.peso} KG com ${this.idade} anos`);
    }
}

let pessoa = new Pessoa("Pedro", 78, 25);

console.log(pessoa);
console.log();
pessoa.envelhecer();
pessoa.emagrecer();
pessoa.dados();
console.log(pessoa);
console.log();
pessoa.engordar();
pessoa.dados();
console.log(pessoa);