console.log("Projeto Detetive");
console.log("Responda com [S]im ou [N]ao");
let pergunta1 = prompt("Telefonou para a vítima? ").toUpperCase();
let pergunta2 = prompt("Esteve no local do crime? ").toUpperCase();
let pergunta3 = prompt("Mora perto da vítima? ").toUpperCase();
let pergunta4 = prompt("Devia para a vítima? ").toUpperCase();
let pergunta5 = prompt("Já trabalhou com a vítima? ").toUpperCase();
let count = 0;
//Função if para fazer a contagem dos "Sim"
if(pergunta1==="S"){
  count ++;
  }
if(pergunta2==="S"){
  count ++;
  }
if(pergunta3==="S"){
  count ++;
  }
if(pergunta4==="S"){
  count ++;
  }
if(pergunta5==="S"){
  count ++;
  }
//Função if, para fazer a contagem de quantas vezes foram digitadas a string "S", e decidir se ela é inocente ou culpada
  if(count === 5){
    console.log("Você é o Assassino.");
  }else if (count >= 3){
    console.log("Você é Cúmplice.");
  }else if (count === 2 ){
    console.log("Você é Suspeito.");
  }else{
    console.log("Você é Inocente.");
  }
