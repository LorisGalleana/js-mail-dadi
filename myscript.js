/* SEZIONE CHECK MAIL */

let nome = ["a", "b", "c", "d"];

let invitato = "b";

for (let i = 0; i < nome.length; i++) {
  //console.log(nome[i]);
  
  if (invitato === nome[i]) {
    console.log("sei sulla lista");
    break;
  }
  else {
    console.log("non sei sulla lista")
  }

};




/* SEZIONE LANCIO DADI */


let player1 = [];
let player2 = [];
let roll = document.querySelector(".roll");
let risultato= document.querySelector(".risultato");
let i = 0;
roll.addEventListener("click", function() {
  
  player1.push(Math.floor(Math.random()*6)+1);
  player2.push(Math.floor(Math.random()*6)+1);
  
  console.log(player1)
  console.log(player2)
  
  if (player1[i] < player2[i]) {
    
    risultato.innerHTML = (player1[i] + " e " + player2[i] + " Player 2 vince")
}
  else if (player1[i] > player2[i]) {
    
    risultato.innerHTML = (player1[i] + " e " + player2[i] + " Player 1 vince")
  }
  else {
    risultato.innerHTML = (player1[i] + " e " + player2[i] + " Pareggio")
  }
   player1 = [];
   player2 = [];
} ) 
