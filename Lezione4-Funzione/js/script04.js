/**
 * costruisci 2 array
 * 1 per i prodotti
 * 1 per prezzi
 * 
 * crea una funzione che unisce prezzi con prodotti
 * 
 * crea una funzione che calcola il totale dei prezzi
 * 
 * crea la funzione stampaScontrino() che richiami le 
 * altre due funzioni e stampa tutto nella pagina 
 * 
 * se il totale supera i 10 euro stampiamo "hai appena superato i 10€ 
 * per ottenere lo sconto "
 */


//soluzione 


let listaScontrino = document.getElementById("listaScontrino");
let totaleScontrino = document.getElementById("totaleScontrino");
let totaleArticoli = document.getElementById ("totaleArticoli");

//creazione dei 2 Array

let prodotti =["pane","yogurt", "insalata", "Tonno"];

let prezzi = [1, 2, 3, 4];

//creazione della funzione che unisce i prezzi con i prodotti

function unisciPrezzieProdotti(prezzo, prodotto){
let prezzoProdotto = prodotto + " - " + prezzo;
return prezzoProdotto;

}
// creazione della funzione che calcola i prezzi
let totale = 0;
function calcolaTotale(prezzo){
    totale += prezzo;
}

//per stampare gli scontrini

function stampaScontrino(){
for(let i = 0; i < prodotti.length; i++){
    let voceScont = unisciPrezzieProdotti(prezzi[i], prodotti[i]);
    console.log(voceScont);
    listaScontrino.innerHTML += "<li>" + voceScont + " € </li>"

    calcolaTotale(prezzi[i]);
}

// per ultima domanda
if (totale >= 10){
    totaleScontrino.innerHTML = "totale: " + totale.toPrecision(4) + "€. hai attenuto lo sconto";
    }
    else{
        totaleScontrino.innerHTML = "Totale: " + totaleScontrino.toPrecision(4) + " € ";
    }
//toPrecision(4) per avere 2 numeri dopo la virgola
//4 peeché contiamo dalla prima cifra 
totaleScontrino.innerHTML = "totale: " + totale.toPrecision(4) + " €";
}
