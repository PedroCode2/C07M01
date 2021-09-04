const prompt = require('prompt-sync')();

let filme = {
    nome: "Inatividade Paranormal 2",
    genero: "Terror/Comédia",
    duração: "1h 27m",
    ano:  2014,
    diretor: "Michael Tiddes"
   
};

filme.ano = 2014;
filme.personagens = ["Malcolm Johnson", "Megan", "Kisha Davis", "Aghoul", "Ray-Ray", "Padre Doug Williams"]
filme.sobre = function() {
    return `o filme ${this.nome} estreiou em ${this.ano} do diretor ${this.diretor} contando com ${this.personagens} e um grande elenco!`
}


console.log(filme);
console.log(filme.personagens[0]);

console.log(filme.sobre);