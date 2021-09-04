const prompt = require('prompt-sync')();

let filme1 = {
    nome: "Inatividade Paranormal 2",
    duração: "1h 27m",
    ano: 2014,
    diretor: "Michael Tiddes",
    atores: ["Marlon Wayans", "Jaime Pressly", "Essence Atkins.", "Gabriel Iglesias", "Missi Pyle", "Ashley Rickards", "Affion Crockett", "Steele Stebbins"],
    sobre() {
        return `o filme ${this.nome}do diretor ${this.diretor} estreiou em ${this.ano} contando com otimo elenco composto por ${this.atores}`
    }
}
let filme2 = {
    nome: "Todo Mundo em Pânico",
    duração: "1h 30m",
    ano: 2000,
    diretor: "Keenen Ivory Wayans",
    atores:["Marlon Wayans", "Anna Faris", "Jon Abrahams", "Shawn Wayans", "Shannon Elizabeth", "Regina Hall", "Lochlyn Munro", "Dave Sheridan"],
    sobre() {
        return `o filme ${this.nome}do diretor ${this.diretor} estreiou em ${this.ano} contando com otimo elenco composto por ${this.atores}`
    }
}
let filme3 = {
    nome: "A Morte Te Dá Parabéns",
    duração: "1h 36m",
    ano: 2017,
    diretor: "Christopher B. Landon",
    atores: ["Jessica Rothe","Israel Broussard","Ruby Wylder Rivera","Rachel Matthews","Charles Aitken"],
    sobre() {
        return `o filme ${this.nome}do diretor ${this.diretor} estreiou em ${this.ano} contando com otimo elenco composto por ${this.atores}`
    }
}
let filme4 = {
    nome: "Sexta-Feira 13",
    duração: "1h 46m",
    ano: 2009,
    diretor: "Marcus Nispel",
    atores: ["Jared Padalecki", "Danielle Panabaker", "Derek Mears", "Julianna Guill"],
    sobre() {
        return `o filme ${this.nome}do diretor ${this.diretor} estreiou em ${this.ano} contando com otimo elenco composto por ${this.atores}`
}
}
let filme5 = {
    nome: "Alvin e os Esquilos 3",
    duração: "1h 32m",
    ano: 2011,
    diretor: "Mike Mitchell",
    atores: ["David Cross", "Justin Long", "Matthew Gray Gubler", "Jenny Slate"],
    sobre() {
        return `o filme ${this.nome}do diretor ${this.diretor} estreiou em ${this.ano} contando com otimo elenco composto por ${this.atores}`
    }
}
