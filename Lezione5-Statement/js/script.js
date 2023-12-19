//Operatore di confronto. ogni volta che utilizzo un operaTORE di confronto produco un booleano

let num1 = 10;
let num2 = 8;

let cond1 = num1 == num2; //false
let cond2 = num1 > num2; // true
let cond3 = num1 < num2; // false
let cond4 = num1n != num2; // true

let num3 = 20;
let num4 = "20";

let cond5 = num3 === num4; // false
let cond6 = num3 == num4; // true

// if statement
/**
 * ...if (condizione){
 * ..fai qualcosa se true
 * }
 * else{
 * fai qualcosa se false
 * }
 */


let etaUser = 18; 
if(eta >= 18){
    console.log("benvenuto, puoi entrare");
}
else{
    console.log("mi spaiace, non sei maggiorene");
}

let nomeUser = "Best";

if(nomeUser == "Best"){
    console.log("ciao " + nomeUser + "bentornato");

}else{
    console.log("ciao, non conosco il tuo nome" + nomeUser);
}

// ANd e OR logico
//HArd mode
// per potere superare un livello devo avere skill e pèunteggio sopra la soglia 
if(punteggio >= 15 && skill >=6){
    console.log("bravo, hai superato il livello");
}
else{
    console.log("mi dispiace");
}

//EASY Mode
//per poter superare basta che una delle 2 sia sopra la soglia 

if(punteggio >= 15 || skill >= 6){
    console,log("bravo hai superato");
}
else{
    console.log("non hai superato");
}