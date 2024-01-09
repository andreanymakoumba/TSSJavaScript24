// creare 100 numeri casuali, stamparli e verificare quali sono minore di 20 e quanti

let numCasuali = [];

//utilizzo il math.random() per generare numeri casuali
//Math.ceil() arrontonda all'intero superiore
//Math.floorsrrotonda all'intero inferiore

console.log(Math.ceil(Math.random() * 100));

let contatoreDoppioni = 0; 

for(let i = 0; i < 100; i++){
    numCasuali.push(Math.ceil(Math.random() * 100));
}
console.log(numCasuali);

//stampo i singoli numeri nel div
let demo= document.getElementById("demo");
let contatore = 0;

for(let i = 0; i < numCasuali.length; i++){
    if(numCasuali[i] < 20){
        demo.innerHTML += "<p>" + numCasuali[i] + " - questo è minore di 20</p>";
        contatore++;
        //i-- //permette di fare il giro quando trova un doppione
    }
    else{
        demo.innerHTML += "<p>" + numCasuali[i] + "</p>";
    }

 }
    
console.log(contatore);

let display = document.getElementById("display");
display.innerHTML = "i numeri sotto il 20 sono: " + display;

display.innerHTML += "<br> i numeri doppioni sono " + contatoreDoppioni;
//